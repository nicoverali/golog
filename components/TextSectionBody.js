import styled from 'styled-components';
import {Subtitle, ButtonText} from './utils/Typography';

import PrimaryButton from './PrimaryButton';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TextSectionBody = (props) => {

  return (
    <StyledDiv>
      <Subtitle>{props.text}</Subtitle>
      <PrimaryButton width="270px">
        <ButtonText>{props.buttonText}</ButtonText>
      </PrimaryButton>
    </StyledDiv>
  )
}

export default TextSectionBody;
