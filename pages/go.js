import BoardSection from '../components/BoardSection';

export default class Go extends React.Component{

  static getInitialProps({query}){
    return {
      firstName: query.firstName,
      secondName: query.secondName,
      vsIA: query.vsIA
    };
  }

  constructor(props){
    super(props);
    if(props.vsIA){
      this.competitorA = this.createCompetitor('Tú', 'User');
      this.competitorB = this.createCompetitor('Golguito', 'Golguito');
    }
    else{
      let nameA = props.firstName || 'Jugador 1';
      let nameB = props.secondName || 'Jugador 2';
      this.competitorA = this.createCompetitor(nameA, 'User');
      this.competitorB = this.createCompetitor(nameB, 'User');
    }

    this.state = {
      lastDidPass: false,
      isAbleToPlay: false,
      loaded: false,
      pengine: null,
      territoryPengine: null
    }
  }

  createCompetitor(name, icon){
    return {
      name: name,
      icon: icon,
      stones: 0,
      captures: 0,
      territory: 0,
      getPuntaje(){return this.stones + this.territory}
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
        isBoardActive: true,
        blackSymbol: prologVar.FP,
        whiteSymbol: prologVar.SP,
        currentPlayer: prologVar.FP,
        board: prologBoardToJs(prologVar.B),
        handleStonePlaced: (x,y) => this.handleStonePlaced(x,y)
      },

    });
  }

  handlePengineSuccess(prologVar){
    let board = this.state.board;
    let currentPlayer = this.state.currentPlayer;
    board.board = prologBoardToJs(prologVar.UPB);
    currentPlayer.tempCaptures = prologVar.CC;
    this.setState({
      lastStonePlaced: [prologVar.X, prologVar.Y],
      tempPengineBoard: prologVar.UPB,
      board: board,
      isAbleToPlay: true,
      currentPlayer: currentPlayer
    });
    if(this.props.vsIA && !this.state.board.isBoardActive){
      this.handlePlay();
    }
  }

  handleTerritoryReqSuccess(prologVar){
    this.competitorA.territory = prologVar.CB;
    this.competitorB.territory = prologVar.CW;
    this.setState(this.state); // Force re-render
  }


  handlePengineFailure(r){
    alert('Movimiento suicida.');
  }

  handleStonePlaced(x, y){
    let currentPlayer = this.state.board.currentPlayer;
    let board = jsBoardToProlog(this.state.pengineBoard);
    let query = `goPlay(${x}, ${y}, ${currentPlayer}, ${board}, UPB, CC), X = ${x}, Y = ${y}`;
    this.state.pengine.ask(query);
  }

  handlePlay(){
    this.setState((state) => {
      let prologBoard = jsBoardToProlog(state.tempPengineBoard);
      this.askForTerritory(prologBoard);
      if(this.props.vsIA && this.state.board.isBoardActive){
        this.askForIAMove(this.state.lastStonePlaced, prologBoard);
      }

      let board = state.board;
      let nextPlayer = this.changeCompetitor(state.currentPlayer);
      board.currentPlayer = board.currentPlayer == board.blackSymbol ? board.whiteSymbol:board.blackSymbol;
      board.isBoardActive = this.props.vsIA ? !board.isBoardActive : board.isBoardActive;
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
      this.showEndOfGame();
      this.setState((state)=>{
        let board = state.board;
        board.isBoardActive = false;
        return {
          board: board,
          isAbleToPlay: false
        }
      })
    }
    else{
      this.setState((state)=>{
        let board = state.board;
        board.board = prologBoardToJs(state.pengineBoard);
        board.currentPlayer = board.currentPlayer == board.blackSymbol ? board.whiteSymbol:board.blackSymbol;
        board.isBoardActive = this.props.vsIA ? !board.isBoardActive : board.isBoardActive;
        state.currentPlayer.tempCaptures = 0;
        return {
          board: board,
          isAbleToPlay: false,
          lastDidPass: true,
          currentPlayer: this.changeCompetitor(state.currentPlayer)
        }
      })
    }
  }

  askForTerritory(board){
    let query = `goTerritory(${board}, CB, CW)`;
    this.state.territoryPengine.ask(query);
  }

  askForIAMove(lastStonePlaced, board){
    let query = `goIA(${lastStonePlaced[0]}, ${lastStonePlaced[1]}, ${board}, UPB, CC)`;
    this.state.pengine.ask(query);
  }

  changeCompetitor(current){
    return current == this.competitorA ? this.competitorB : this.competitorA;
  }

  showEndOfGame(){
    let scoreA = this.competitorA.getPuntaje();
    let scoreB = this.competitorB.getPuntaje();
    if(scoreA == scoreB){
      alert(`¡ Empate ! \n Puntaje: ${scoreA}`);
    }
    else if(scoreA > scoreB){
      alert(`¡ Ganaste ${this.competitorA.name} ! \n Puntaje: ${scoreA}`);
    }
    else{
      alert(`¡ Ganaste ${this.competitorB.name} ! \n Puntaje: ${scoreB}`);
    }
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
