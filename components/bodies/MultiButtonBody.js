import styled from 'styled-components';
import {Subtitle, ButtonText} from '../utils/Typography';
import Link from 'next/link';

import PrimaryButton from '../PrimaryButton';

const StyledMainDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledButtonsDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`

const MultiButtonBody = ({subtitle, buttonConfig, ...props}) => {
  let buttons = [];
  for(let btnCfg of buttonConfig){
    let button = (
      <Link key={btnCfg.text} prefetch href={btnCfg.href}>
        <a>
          <PrimaryButton width="206px">
            <ButtonText>{btnCfg.text}</ButtonText>
          </PrimaryButton>
        </a>
      </Link>
    )
    buttons.push(button);
  }

  return (
    <StyledMainDiv {...props}>
      <Subtitle>{subtitle}</Subtitle>
      <StyledButtonsDiv>
        {buttons}
      </StyledButtonsDiv>
    </StyledMainDiv>
  )
}

export default MultiButtonBody;
