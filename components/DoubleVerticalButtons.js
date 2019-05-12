import styled from 'styled-components';

const StyledSeparator = styled.hr`
  position: relative;
  width: 40%;
  border: 1px solid ${props => props.theme.color.lightDark4};
  margin: 16px auto 16px auto;

  &::after{
    position: absolute;
    top : 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    content: '';
    border: 2px solid ${props => props.theme.color.lightDark4};
    background-color: ${props => props.theme.color.lightDark3};
    outline: 3px solid ${props => props.theme.color.lightDark3};
    height: 5px;
    width: 5px;
    border-radius: 100%;

  }
`

const DoubleVerticalButtons = ({topButton, bottomButton, ...props}) => (
  <div css={{margin:'0 auto', maxWidth:'224px', width:'auto', padding:'24px', textAlign:'center'}}>
    {topButton}
    <StyledSeparator/>
    {bottomButton}
  </div>
)

export default DoubleVerticalButtons;
