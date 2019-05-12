import styled, {css} from 'styled-components';
import Competitor from './Competitor';
import Stat from './Stat';

const StyledContainer = styled.div`
  height: 400px;
  width: 500px;
  border: 1px solid ${props => props.theme.color.lightDark4};
`

const StyledBottomContainer = styled.div`
  display: flex;
  height: 40%;
  justify-content: space-around;
  align-items: center;
  background-color: ${props => props.theme.color.lightDark4};
`

const CenterStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CompetitorStats = ({name, icon, stones = 0, captures = 0, territory = 0, ...props}) => (
  <StyledContainer {...props}>
    <div css={{height:'60%', position:'relative'}}>
      <Competitor css={CenterStyle} name={name} icon={icon}/>
    </div>
    <StyledBottomContainer>
      <Stat name='Piedras' value={stones}/>
      <Stat name='Capturas' value={captures}/>
      <Stat name='Territorio' value={territory}/>
    </StyledBottomContainer>
  </StyledContainer>
)

export default CompetitorStats;
