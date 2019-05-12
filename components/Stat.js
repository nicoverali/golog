import styled from 'styled-components';
import {BodyCopy, Caption} from './utils/Typography';

const Stat = ({name, value, ...props}) => (
  <div css={{textAlign:'center'}}{...props}>
    <BodyCopy css={{display:'block', marginBottom:'4px'}}>{value}</BodyCopy>
    <Caption css={{display:'block'}}>{name}</Caption>
  </div>
)

export default Stat;
