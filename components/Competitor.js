import SVG from './utils/SVG';
import {BodyCopy} from './utils/Typography';

const Competitor = ({icon, name = ''}) => (
  <div css={{'text-align':'center'}}>
    <SVG src={'/static/icons/'+icon+'.svg'} svgStyle={{paddingBottom:'8px'}}/>
    <BodyCopy>{name}</BodyCopy>
  </div>
)

export default Competitor;
