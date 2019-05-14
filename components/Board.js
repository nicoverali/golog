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
  transition: opacity 150ms ease-in-out;

  ${props => props.hide && css`
    opacity: 0;
    &:hover{
      opacity: 0.7;
    }
  `}
`

export default class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      board: (props.board || Array.from(Array(boardSize), () => new Array(boardSize).fill(''))),
      blackSymbol: props.blackSymbol,
      whiteSymbol: props.whiteSymbol,
      currentPlayer: props.currentPlayer
    }
  }

  createBoardCells(){
    let grid = Array.from(Array(boardSize-1), () => new Array(boardSize-1).fill(''))
    return grid.map((row,rowIndex) => (
      <StyledRow key={rowIndex}>
        {grid[rowIndex].map((column, colIndex) => (
          <StyledBoardGridCell key={colIndex}/>
        ))}
      </StyledRow>
    ))
  }

  createStone(sym, posX, posY, hide){
    switch (sym) {
      case this.state.blackSymbol:
        return <BlackStone css={StoneStyle} hide={hide}
          onClick={() => hide ? this.props.onStonePlaced(posX, posY):null}/>
      case this.state.whiteSymbol:
        return <WhiteStone css={StoneStyle} hide={hide}
          onClick={() => hide ? this.props.onStonePlaced(posX, posY):null}/>
      default:
        return this.createStone(this.state.currentPlayer, rowIndex, colIndex, true)
    }
  }

  render(){
    let stoneCells = this.state.board.map((row,rowIndex)=>(
      <tr key={rowIndex}>
        {this.state.board[rowIndex].map((item, colIndex) => (
          <td key={colIndex} style={{position:'relative'}}>
            {this.createStone(item, rowIndex, colIndex)}
          </td>
        ))}
      </tr>
    ))

    return (
      <StyledBoard {...this.props}>
        <StyledBoardGridCellsContainer>
          <tbody>
            {this.createBoardCells(this.state.board.length)}
          </tbody>
        </StyledBoardGridCellsContainer>
        <StyledStonesContainer>
          <tbody>
            {stoneCells}
          </tbody>
        </StyledStonesContainer>
      </StyledBoard>
    )
  }
}
