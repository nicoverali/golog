import BoardSection from '../components/BoardSection';

export default class Go extends React.Component{

  static getInitialProps({query}){
    return {
      firstName: query.firstName,
      secondName: query.secondName
    };
  }

  constructor(props){
    super(props);
    this.competitorA = {
      name: props.firstName,
      icon: 'User',
      captures: 0,
      stones: 0,
      territory: 0
    }
    this.competitorB = {
      name: props.secondName,
      icon: 'User',
      captures: 0,
      stones: 0,
      territory: 0

    }
    this.state = {
      lastDidPass: false,
      isAbleToPlay: false,
      loaded: false,
      pengine: null,
      territoryPengine: null
    }
  }

  componentDidMount(){
    this.state.pengine = new Pengine({
        server: "http://localhost:3030/pengine",
        application: "proylcc",
        ask: 'goStart(B, FP, SP).',
        onsuccess: (r) => this.handleFirstRequest(r),
        destroy: false
      })
    this.state.territoryPengine = new Pengine({
        server: "http://localhost:3030/pengine",
        application: "proylcc",
        onsuccess: (r) => this.handleTerritoryReqSuccess(r.data[0]),
        destroy: false
      })
  }

  handleFirstRequest(r){
    let prologVar = r.data[0];
    this.state.pengine.options.onsuccess = ({data}) => this.handlePengineSuccess(data[0]);
    this.state.pengine.options.onfailure = (r) => this.handlePengineFailure(r);
    this.competitorA.symbol = prologVar.FP;
    this.competitorB.symbol = prologVar.SP;

    this.setState({
      loaded: true,
      pengineBoard: prologVar.B,
      currentPlayer: this.competitorA,
      board: {
        blackSymbol: prologVar.FP,
        whiteSymbol: prologVar.SP,
        currentPlayer: prologVar.FP,
        board: prologBoardToJs(prologVar.B),
        handleStonePlaced: (x,y) => this.handleStonePlaced(x,y)
      },

    });
  }

  handleTerritoryReqSuccess(prologVar){
    this.competitorA.territory = prologVar.CB;
    this.competitorB.territory = prologVar.CW;
    this.setState(this.state); // Force re-render
  }

  handlePengineSuccess(prologVar){
    let board = this.state.board;
    let currentPlayer = this.state.currentPlayer;
    board.board = prologBoardToJs(prologVar.UPB);
    currentPlayer.tempCaptures = prologVar.CC;
    this.setState({
      tempPengineBoard: prologVar.UPB,
      board: board,
      isAbleToPlay: true,
      currentPlayer: currentPlayer
    })
  }

  handlePengineFailure(r){
    console.log('Falure !!!!');
    console.log(r);
  }

  handleStonePlaced(x, y){
    let currentPlayer = this.state.board.currentPlayer;
    let board = jsBoardToProlog(this.state.pengineBoard);
    let query = `goPlay(${x}, ${y}, ${currentPlayer}, ${board}, UPB, CC)`;
    this.state.pengine.ask(query);
  }

  handlePlay(){
    this.setState((state) => {
      let prologBoard = jsBoardToProlog(state.tempPengineBoard);
      this.askForTerritory(prologBoard);
      let board = state.board;
      let nextPlayer = this.changeCompetitor(state.currentPlayer);
      board.currentPlayer = board.currentPlayer == board.blackSymbol ? board.whiteSymbol:board.blackSymbol;
      state.currentPlayer.captures += state.currentPlayer.tempCaptures;
      state.currentPlayer.stones++;
      nextPlayer.stones -= state.currentPlayer.tempCaptures;
      return {
        board: board,
        pengineBoard: state.tempPengineBoard,
        currentPlayer: nextPlayer,
        lastDidPass: false,
        isAbleToPlay: false
      }
    })
  }

  handlePass(){
    if(this.state.lastDidPass){
      console.log('Fin del juego !!');
    }
    this.setState((state)=>{
      let board = state.board;
      board.board = prologBoardToJs(state.pengineBoard);
      board.currentPlayer = board.currentPlayer == board.blackSymbol ? board.whiteSymbol:board.blackSymbol;
      state.currentPlayer.tempCaptures = 0;
      return {
        board: board,
        lastDidPass: true,
        currentPlayer: this.changeCompetitor(state.currentPlayer)
      }
    })
  }

  askForTerritory(board){
    let query = `goTerritory(${board}, CB, CW)`;
    this.state.territoryPengine.ask(query);
  }

  changeCompetitor(current){
    return current == this.competitorA ? this.competitorB : this.competitorA;
  }

  render(){
    if(this.state.loaded){
      return <BoardSection
        isAbleToPlay={this.state.isAbleToPlay}
        onPass={()=>this.handlePass()} onPlay={()=>this.handlePlay()}
        competitorA={this.competitorA} competitorB={this.competitorB} currentPlayer={this.state.currentPlayer}
        board={this.state.board}
      />
    }

    return null;
  }
}

function jsBoardToProlog(board){
  return `[${board[0]}, ${jsMatrixToProlog(board[1])}]`;
}

function jsMatrixToProlog(matrix){
  if(Number.isInteger(matrix)){
    return matrix;
  }
  if(matrix.functor){
    return `${matrix.functor}(${matrix.args[0]}, ${jsMatrixToProlog(matrix.args[1])}, ${jsMatrixToProlog(matrix.args[2])}, ${jsMatrixToProlog(matrix.args[3])})`;
  }
  return matrix;
}

function prologBoardToJs(board){
  let size = board[0];
  let matrix = new Array(size);
  let rows = new Array(size)
  parseTree(board[1], rows);
  for (var i = 0; i < rows.length; i++) {
    let columns = new Array(size);
    parseTree(rows[i], columns);
    matrix[i] = columns;
  }

  return matrix;
}

function parseTree(tree, list){
  if(tree && tree.functor == 'node'){
    let rowNumber = tree.args[0];
    let content = tree.args[1];
    list[rowNumber] = content;
    parseTree(tree.args[2], list);
    parseTree(tree.args[3], list);
  }
}
