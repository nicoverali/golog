import styled, {css} from 'styled-components';
import {Subtitle, ButtonText, Quote} from '../utils/Typography';
import Link from 'next/link';

import PrimaryButton from '../PrimaryButton';
import Competitor from '../Competitor';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledCompetitorsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const QuoteStyle = css`
  margin: 0 42px;
`

const StartBody = ({subtitle, competitors, buttonConfig, ...props}) => (
    <StyledDiv {...props}>
      <Subtitle>{subtitle}</Subtitle>
      <StyledCompetitorsDiv>
        <Competitor icon={competitors[0].icon} name={competitors[0].name}/>
        <Quote css={QuoteStyle}>VS</Quote>
        <Competitor icon={competitors[1].icon} name={competitors[1].name}/>
      </StyledCompetitorsDiv>
      <Link prefetch href={buttonConfig.href}>
        <a>
          <PrimaryButton width="270px">
            <ButtonText>{buttonConfig.text}</ButtonText>
          </PrimaryButton>
        </a>
      </Link>
    </StyledDiv>
)

export default StartBody;
