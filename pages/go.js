import BoardSection from '../components/BoardSection';

export default class Go extends React.Component{

  static getInitialProps({query}){
    return {
      firstName: query.firstName,
      secondName: query.secondName,
      vsIA: false //query.vsIA
    };
  }

  constructor(props){
    super(props);
    if(props.vsIA){
      this.competitorA = this.createCompetitor('Tú', 'User', 'w');
      this.competitorB = this.createCompetitor('Golguito', 'Golguito', 'b');
    }
    else{
      let nameA = props.firstName || 'Jugador 1';
      let nameB = props.secondName || 'Jugador 2';
      this.competitorA = this.createCompetitor(nameA, 'User', 'w');
      this.competitorB = this.createCompetitor(nameB, 'User', 'b');
    }

    this.state = {
      lastDidPass: false,
      isAbleToPlay: false,
      loaded: false,
      pengine: null,
      territoryPengine: null,
      board: {
        blackSymbol: "b",
        whiteSymbol: "w",
        board: this.createBoard(),
        isBoardActive: true,
        currentPlayer: 'w',
        handleStonePlaced: (x,y) => this.handleStonePlaced(x,y)
      },
      currentPlayer: this.competitorA
    }
  }

  createBoard(){
    return new Array(19).fill(null).map(() => new Array(19).fill('-'))
  }

  createCompetitor(name, icon, symbol){
    return {
      name,
      icon,
      symbol,
      stones: 0,
      captures: 0,
      territory: 0,
      getPuntaje(){return this.stones + this.territory}
    }
  }

  handleStonePlaced(x, y){
    let currentPlayer = this.state.board.currentPlayer;
    let board = this.state.board;
    board.board[x][y] = currentPlayer;

    if(this.state.lastPlacedStone){
      let lastX = this.state.lastPlacedStone.x;
      let lastY = this.state.lastPlacedStone.y;
      board.board[lastX][lastY] = '-'
    }

    this.setState({board, lastPlacedStone:{x, y}, isAbleToPlay: true})
  }

  handlePlay(){
    console.log("Holis :)")
    this.setState((state)=>{
      let board = state.board;
      board.currentPlayer = board.currentPlayer == board.blackSymbol ? board.whiteSymbol:board.blackSymbol;
      board.isBoardActive = this.props.vsIA ? !board.isBoardActive : board.isBoardActive;
      state.currentPlayer.stones++;
      return {
        board: board,
        isAbleToPlay: false,
        lastDidPass: false,
        lastPlacedStone: null,
        currentPlayer: this.changeCompetitor(state.currentPlayer)
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
        board.currentPlayer = board.currentPlayer == board.blackSymbol ? board.whiteSymbol:board.blackSymbol;
        board.isBoardActive = this.props.vsIA ? !board.isBoardActive : board.isBoardActive;
        state.currentPlayer.tempCaptures = 0;
        return {
          board: board,
          isAbleToPlay: false,
          lastDidPass: true,
          lastPlacedStone: null,
          currentPlayer: this.changeCompetitor(state.currentPlayer)
        }
      })
    }
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
    return <BoardSection
      isAbleToPlay={this.state.isAbleToPlay}
      onPass={()=>this.handlePass()} onPlay={()=>this.handlePlay()}
      competitorA={this.competitorA} competitorB={this.competitorB} currentPlayer={this.state.currentPlayer}
      board={this.state.board}
    />
  }
}