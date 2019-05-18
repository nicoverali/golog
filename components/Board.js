import styled, {css} from 'styled-components';
import Color from 'color';
import {BlackStone, WhiteStone} from './Stone';

const boardSize = 19;

function getDarker(color){
  return Color(color).desaturate(0.38).darken(0.18).hex();
}

const StyledBoard = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.board};
  width: 100%;
  height: calc(100% - 10px);
  max-width: 800px;
  max-height: 800px;
  border-radius: 5px;
  box-shadow: 0 10px 0 ${props => getDarker(props.theme.color.board)};
  border: 3px solid ${props => getDarker(props.theme.color.board)};
  box-sizing: border-box;
`

const StyledRow = styled.tr`
  &:nth-of-type(3) td:nth-child(3)::after, &:nth-of-type(3) td:nth-child(9)::after, &:nth-of-type(3) td:nth-child(15)::after,
  &:nth-of-type(9) td:nth-child(3)::after, &:nth-of-type(9) td:nth-child(9)::after, &:nth-of-type(9) td:nth-child(15)::after,
  &:nth-of-type(15) td:nth-child(3)::after, &:nth-of-type(15) td:nth-child(9)::after, &:nth-of-type(15) td:nth-child(15)::after{
    position: absolute;
    right: -14%;
    bottom: -14%;
    content: '';
    width: 24%;
    height: 24%;
    border-radius: 100%;
    background-color: ${props => props.theme.color.boardDots};
  }
`

const StyledBoardGridCellsContainer = styled.table`
  border: 2px solid #C4A76F;
  border-collapse: collapse;
  width: calc(100% - 24px*2);
  height: calc(100% - 24px*2);
  margin: 24px;
`


const StyledBoardGridCell = styled.td`
  position: relative;
  border: 2px solid ${props => getDarker(props.theme.color.board)};
`

const StyledStonesContainer = styled.table`
  position: absolute;
  top: 0;
  left: 0;
  padding: calc(24px - (100%/(${boardSize}*2)));
  width: 100%;
  height: 100%;
  border: none;
  box-sizing: border-box;
`

const StoneStyle = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: auto;
  height: auto;
  margin: 0%;
  opacity: 1;
  transition: opacity 150ms ease-out;

  ${props => props.hide && css`
    opacity: 0;
  `}

  ${props => props.hide && props.isBoardActive && css`
    &:hover{
      opacity: 0.7;
    }
  `}
`

export default class Board extends React.Component{
  constructor(props) {
    super(props);
    let board = props.board || Array.from(Array(boardSize), () => new Array(boardSize).fill(''));
    this.stones = this.createStoneCells(board, props.currentPlayer, props.isBoardActive);
    this.grid = this.createBoardCells(board.length);
  }

  createBoardCells(boardSize){
    let grid = Array.from(Array(boardSize-1), () => new Array(boardSize-1).fill(''))
    return grid.map((row,rowIndex) => (
      <StyledRow key={rowIndex}>
        {grid[rowIndex].map((column, colIndex) => (
          <StyledBoardGridCell key={colIndex}/>
        ))}
      </StyledRow>
    ))
  }

  createStoneCells(board, currentPlayer, isBoardActive){
    let boardSize = board.length;
    let stoneCells = new Array(boardSize);
    for (var i = 0; i < boardSize; i++) {
      let row = new Array(boardSize);
      for (var j = 0; j < boardSize; j++) {
        row[j] = (
          <td key={j} style={{position:'relative'}}>
            {this.createStone(board[i][j], i, j, currentPlayer, isBoardActive)}
          </td>
        )
      }
      stoneCells[i] = (
        <tr key={i}>
          {row}
        </tr>
      );
    }
    return stoneCells;
  }

  createStone(sym, posX, posY, currentPlayer, isBoardActive, hide){
    let callback = hide && isBoardActive ? ()=>this.props.handleStonePlaced(posX, posY) : null;
    switch (sym) {
      case this.props.blackSymbol:
        return <BlackStone css={StoneStyle} hide={hide} isBoardActive={isBoardActive} onClick={callback}/>
      case this.props.whiteSymbol:
        return <WhiteStone css={StoneStyle} hide={hide} isBoardActive={isBoardActive} onClick={callback}/>
      default:
        return this.createStone(currentPlayer, posX, posY, currentPlayer, isBoardActive, true);
    }
  }

  componentWillUpdate(nextProps){
    this.stones = this.createStoneCells(nextProps.board, nextProps.currentPlayer, nextProps.isBoardActive);
  }

  render(){
    return (
      <StyledBoard {...this.props}>
        <StyledBoardGridCellsContainer>
          <tbody>
            {this.grid}
          </tbody>
        </StyledBoardGridCellsContainer>
        <StyledStonesContainer>
          <tbody>
            {this.stones}
          </tbody>
        </StyledStonesContainer>
      </StyledBoard>
    )
  }
}
