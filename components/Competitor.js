import SVG from './utils/SVG';

const Competitor = ({icon, name = ''}) => (
  <div css={{'text-align':'center'}}>
    <SVG src={'/static/icons/'+icon+'.svg'} style={{paddingBottom:'8px'}}/>
    <span>{name}</span>
  </div>
)

export default Competitor;
