import styled from 'styled-components';
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

const StyledBoardCellContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(18, calc(100%/18));
  grid-template-rows: repeat(18, calc(100%/18));
  width: calc(100% - 24px * 2);
  height: calc(100% - 24px * 2);
  border: 1px solid ${props => getDarker(props.theme.color.board)};
  margin: 24px;
`

const StyledBoardCell = styled.div`
  position: relative;
  border: 1px solid ${props => getDarker(props.theme.color.board)};

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

const StyledGridCellContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(19,calc(100%/19));
  grid-template-rows: repeat(19,calc(100%/19));
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: calc(24px - (100%/(19*2)) + 1px);
  box-sizing: border-box;
`

const StyledGridCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Board = (props) => {
  const boardSize = 19*19;
  let boardCells = new Array();
  let gridCells = new Array();
  for(let i = 0; i < 18*18; i++){
    boardCells.push(<StyledBoardCell/>);
  }
  for(let i = 0; i < 50; i++){
    gridCells.push(<StyledGridCell><BlackStone css={{width:'90%', height: '90%'}}></BlackStone></StyledGridCell>);
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
