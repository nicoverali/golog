import Board from './Board';
import styled from 'styled-components';

const StyledSquareContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: ${props => props.parentHeight};
  height: 100%;
  margin: auto;
`

const StyledBoardContainer = styled.div`
  position: absolute;
  width: 100%;
  padding-bottom: 100%;
  top: 50%;
  transform: translateY(-50%);
`
const StyledBoard = styled(Board)`
  position: absolute;
`

const SquareBoardContainer = ({parentHeight, className, ...props}) => (
  <StyledSquareContainer parentHeight={parentHeight} className={className}>
    <StyledBoardContainer>
      <StyledBoard {...props}/>
    </StyledBoardContainer>
  </StyledSquareContainer>
)

export default SquareBoardContainer;
