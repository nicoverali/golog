import ReactSVG from 'react-svg';


const SVG = ({src, style = {}, ...props}) => (
  <ReactSVG css={{fontSize:0}} svgStyle={style} src={src} {...props}/>
)

export default SVG
