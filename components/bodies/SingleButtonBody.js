import styled from 'styled-components';
import {Subtitle, ButtonText} from '../utils/Typography';
import Link from 'next/link';

import PrimaryButton from '../PrimaryButton';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const SingleButtonBody = ({subtitle, buttonConfig, ...props}) => (
    <StyledDiv {...props}>
      <Subtitle>{subtitle}</Subtitle>
      <Link prefetch href={buttonConfig.href}>
        <a>
          <PrimaryButton width="270px">
            <ButtonText>{buttonConfig.text}</ButtonText>
          </PrimaryButton>
        </a>
      </Link>
    </StyledDiv>
)

export default SingleButtonBody;
