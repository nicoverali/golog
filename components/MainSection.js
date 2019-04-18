import styled, {css} from 'styled-components';
import {H1, H2} from './utils/Typography';

const StyledDiv = styled.div`
  height: 449px;
  width: 564px;
  padding: 16px 16px 56px 16px;

  background-color: ${props => props.theme.color.lightDark3};
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15), 0 4px 8px 0 rgba(0,0,0,0.15);
  -moz-box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15), 0 4px 8px 0 rgba(0,0,0,0.15);
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.15), 0 4px 8px 0 rgba(0,0,0,0.15);

  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledSeparator = styled.hr`
  display: block;
  height: 1px;
  width: 60%;
  border: 0;
  border-top: 1px solid ${props => props.theme.color.lightDark4};
  padding: 0;
  margin: 0 0 24px 0;
`
const StyledTitleContainer = styled.div`
  height: 136px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleStyle = css`
  color: ${props => props.theme.color.primary};
`

const BodyComponentStyle = css`
  height: 100%;
  align-self: flex-end;
`

const MainSection = ({logo, title, ...props}) => {
  let Title = logo ?
    <H1 css={TitleStyle}>{title}</H1> :
    <H2 css={TitleStyle}>{title}</H2>;

  return (
    <StyledDiv>
      <StyledTitleContainer>
        {Title}
      </StyledTitleContainer>
      <StyledSeparator/>
      {props.children}
    </StyledDiv>
  )
}

export default MainSection;
