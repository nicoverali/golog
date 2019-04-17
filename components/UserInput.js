import SVG from './utils/SVG';
import styled from 'styled-components';
import {BodyCopyStyle, Caption} from './utils/Typography';

const StyledSVG = styled(SVG)`
  vertical-align: middle;
  display: inline-block;
`

const StyledCaption = styled(Caption)`
  vertical-align: middle;
  margin-left: 5px;
`;

const StyledInput = styled.input`
  ${BodyCopyStyle}
  margin-top: 4px;
  border-radius: 3px;
  padding: 6px 0 6px 16px
`

const UserInput = (props) => (
  <div>
    <div>
      <StyledSVG src='/static/icons/User.svg' svgStyle={{width:'14px', height:'14px'}}/>
      <StyledCaption light>Jugador blancas</StyledCaption>
    </div>
    <StyledInput placeholder="Nombre"/>
  </div>
)

export default UserInput;
