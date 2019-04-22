import styled, {css} from 'styled-components';
import {Caption} from './utils/Typography';

const StyledDiv = styled.div`
  width: 100%;
  height: 36px;
  line-height: 36px;
  text-align: center;
`

const Footer = (props) => (
  <StyledDiv {...props}>
    <Caption light> Copyright 2019. </Caption>
  </StyledDiv>
)

export default Footer;
