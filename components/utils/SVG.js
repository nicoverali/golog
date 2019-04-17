import ReactSVG from 'react-svg';


const SVG = ({src, svgStyle = {}, ...props}) => (
  <ReactSVG css={{fontSize:0}} svgStyle={svgStyle} src={src} {...props}/>
)

export default SVG
