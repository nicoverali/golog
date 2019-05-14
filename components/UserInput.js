import SVG from './utils/SVG';
import styled from 'styled-components';
import {BodyCopy, Caption} from './utils/Typography';

const StyledSVG = styled(SVG)`
  vertical-align: middle;
  display: inline-block;
`

const StyledCaption = styled(Caption)`
  vertical-align: middle;
  margin-left: 5px;
`;

const StyledInput = styled(BodyCopy)`
  margin-top: 4px;
  padding: 6px 0 6px 16px;
  background-color: ${props => props.theme.color.lightDark2};
  border: 1px solid ${props => props.theme.color.lightDark4};
  border-radius: 3px;
`

const StyledWarningSpan = styled(Caption)`
  display: block;
  margin-top: 4px;
  color: ${props => props.theme.color.warning};
  opacity: 0;
`

const UserInput = ({name, handleChange, errorMessage, inputValue, ...props}) => {
  let Warning;
  if(errorMessage){
    Warning = <StyledWarningSpan style={{opacity:1}} light>{errorMessage}</StyledWarningSpan>
  }
  else{
    Warning = <StyledWarningSpan light>' '</StyledWarningSpan>
  }

  return (
    <div {...props}>
      <div>
        <StyledSVG src='/static/icons/User.svg' svgStyle={{width:'14px', height:'14px'}}/>
        <StyledCaption light>{name}</StyledCaption>
      </div>
      <StyledInput as='input' onChange={handleChange} value={inputValue}/>
      {Warning}
    </div>
  )
}

export default UserInput;
