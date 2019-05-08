import styled, {css} from 'styled-components';
import Color from 'color';
import {BlackStone} from './Stone';

function getDarker(color){
  return Color(color).desaturate(0.38).darken(0.18).hex();
}

const StyledBoard = styled.div`
  position: relative;
  background-color: ${props => props.theme.color.board};
  width: 750px;
  height: 750px;
  border-radius: 5px;
  box-shadow: 0 10px 0 ${props => getDarker(props.theme.color.board)};
  border: 3px solid ${props => getDarker(props.theme.color.board)};
  box-sizing: border-box;
`

const StyledBoardCellContainer = styled.table`
  border: 2px solid #C4A76F;
  border-collapse: collapse;
  width: calc(100% - 24px*2);
  height: calc(100% - 24px*2);
  margin: 24px;

  tr:nth-child(3),:nth-child(4){
    position: absolute;
    height: 100%;
    background-color: red;
  }
`

const StyledBoardCell = styled.td`
  position: relative;
  border: 2px solid ${props => getDarker(props.theme.color.board)};

  &::after{
    position: absolute;
    right: -10%;
    bottom: -10%;
    content: '';
    width: 20%;
    height: 20%;
    border-radius: 100%;
    background-color: ${props => props.theme.color.boardDots};;
  }
`

const StyledGridCellContainer = styled.table`
  position: absolute;
  top: 0;
  left: 0;
  padding: calc(24px - (100%/(19*2)));
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
  margin: 5%;
`

const Board = (props) => {
  const boardSize = 19;
  let boardCells = new Array();
  let gridCells = new Array();
  for(let i = 0; i < boardSize-1; i++){
    let rowCells = [];
    for (let j = 0; j < boardSize-1; j++) {
      rowCells.push(<StyledBoardCell/>)
    }
    boardCells.push(<tr>{rowCells}</tr>);
  }
  for(let i = 0; i < boardSize; i++){
    let rowCells = [];
    for (let j = 0; j < boardSize; j++) {
      if(i > 10){
        rowCells.push(<td css={{position:'relative'}}></td>)
      }
      else{
        rowCells.push(
          <td css={{position:'relative'}}>
            <BlackStone css={StoneStyle}></BlackStone>
          </td>
        )
      }
    }
    gridCells.push(<tr>{rowCells}</tr>);
  }

  return (
    <StyledBoard {...props}>
      <StyledBoardCellContainer>
        {boardCells}
      </StyledBoardCellContainer>
      <StyledGridCellContainer>
        {gridCells}
      </StyledGridCellContainer>
    </StyledBoard>
  );
}

export default Board;
