import styled from 'styled-components';

import Footer from '../components/Footer';


const StyledDiv = styled.div`
  background-image: url('static/images/background.png');
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledFooter = styled(Footer)`
  position: absolute;
  bottom: 0;
`

const MainLayout = (props) => (
  <StyledDiv {...props}>
    {props.children}
    <StyledFooter/>
  </StyledDiv>
)

export default MainLayout;
