import styled, {css} from 'styled-components';
import {BodyCopy} from './utils/Typography';

const StyledStoneContainer = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 8px auto;

  &.small{
    margin: 0 16px 0 0;
    display: inline-block;
    vertical-align: middle;
  }
`

const StyledInfoContainer = styled.div`
  text-align: center;

  &.small{
    display: inline-block;
    text-align: left;
    vertical-align: middle;
  }
`

const CurrentPlayTimer = ({stone, playerName, minutes, seconds, small, ...props}) => (
  <div {...props}>
    <StyledStoneContainer className={small ? 'small' : ''}>
      {stone}
    </StyledStoneContainer>
    <StyledInfoContainer className={small ? 'small' : ''}>
      <BodyCopy css={{display:'block'}}>{playerName}</BodyCopy>
      <BodyCopy light>Restante: {minutes}:{formatSeconds(seconds)}</BodyCopy>
    </StyledInfoContainer>
  </div>
)

function formatSeconds(seconds){
  if(seconds < 10){
    return `0${seconds}`;
  }
  return seconds;
}

export default CurrentPlayTimer;
