import styled, {css} from 'styled-components';

const BaseStoneStyle = css`
  height: ${props => props.radius || '40px'};
  width: ${props => props.radius || '40px'};
  -webkit-box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 3px 0 rgba(0,0,0,0.15);
  -moz-box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 3px 0 rgba(0,0,0,0.15);
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2), 0 1px 3px 0 rgba(0,0,0,0.15);
  border-radius: 100%;
`;

export const WhiteStone = styled.div`
  ${BaseStoneStyle};
  background-color: ${props => props.theme.color.whiteStone};
  border: 1px solid ${props => props.theme.color.whiteStoneBorder};
`;

export const BlackStone = styled.div`
  ${BaseStoneStyle};
  background-color: ${props => props.theme.color.blackStone};
  border: 1px solid ${props => props.theme.color.blackStoneBorder};
`;
