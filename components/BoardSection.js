import styled, {css} from 'styled-components';
import Board from '../components/Board';
import SquareBoardContainer from '../components/SquareBoardContainer';
import CompetitorStats from '../components/CompetitorStats';
import GoPlayState from '../components/GoPlayState';
import {H1} from '../components/utils/Typography';

const StyledMainContainer = styled.div`
  width: 80%;
  height: 80vh;
  padding: 16px;

  background-color: ${props => props.theme.color.lightDark3};
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15), 0 4px 8px 0 rgba(0,0,0,0.15);
  -moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15), 0 4px 8px 0 rgba(0,0,0,0.15);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15), 0 4px 8px 0 rgba(0,0,0,0.15);
`

const LeftPanelCSS = css`
  width: calc(50% - 8px);
  height: 100%;
  margin-right: 8px;
  float: left;
`

const H1ContainerCSS = css`
  width: 100%;
  height: 20%;
  text-align: center;
`

const StyledH1 = styled(H1)`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
  color: ${props => props.theme.color.primary};
`


const RightPanelCSS = css`
  width: calc(50% - 8px);
  height: 100%;
  margin-left: 8px;
  float: right;
`

const CompetitorStatsStyle = css`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  padding: 16px;
`

const StyledGoPlayState = styled(GoPlayState)`
  box-sizing: border-box;
  width: 100%;
  height: 35%;
`

const CompetitorStatsContainer = styled.div`
  width: 100%;
  height: calc(45% - 16px);
  margin-top: 16px;
`

const CompetitorStatsCSS = {
  boxSizing: 'border-box',
  width: 'calc(50% - 8px)',
  height: '100%'
}

const BoardSection = ({onPlay, onPass, isAbleToPlay, competitorA, competitorB, currentPlayer, board, ...props}) => (
  <StyledMainContainer>
    <div css={LeftPanelCSS}>
      <div css={H1ContainerCSS}>
        <StyledH1>Golog.</StyledH1>
      </div>
      <StyledGoPlayState onPlay={onPlay} onPass={onPass} isAbleToPlay={isAbleToPlay} currentPlayer={currentPlayer}/>
      <CompetitorStatsContainer>
        <CompetitorStats css={{...CompetitorStatsCSS, marginRight:'8px'}}
          name={competitorA.name} icon={competitorA.icon}
          stones={competitorA.stones} captures={competitorA.captures} territory={competitorA.territory}/>
        <CompetitorStats css={{...CompetitorStatsCSS, marginLeft:'8px'}}
          name={competitorB.name} icon={competitorB.icon}
          stones={competitorB.stones} captures={competitorB.captures} territory={competitorB.territory}/>
      </CompetitorStatsContainer>
    </div>
    <div css={RightPanelCSS}>
      <SquareBoardContainer parentHeight='80vh'
        blackSymbol={board.blackSymbol} whiteSymbol={board.whiteSymbol}
        board={board.board} isBoardActive={board.isBoardActive}
        currentPlayer={board.currentPlayer} handleStonePlaced={board.handleStonePlaced}/>
    </div>
  </StyledMainContainer>
)

export default BoardSection;
