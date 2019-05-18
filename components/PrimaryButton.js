import React from 'react';
import Button from './utils/Button';
import styled, {css} from 'styled-components';
import Color from 'color';

function getDarker(color){
  return Color(color).desaturate(0.38).darken(0.18).hex();
}

const PrimaryButton = styled(Button)`
  border: 1px solid ${props => getDarker(props.theme.color.disabled)};
  background-color: ${props => props.theme.color.disabled};
  padding: 0px;
  margin: 4px 0 0 0;
  height: ${props => props.height || '51px'};
  width: ${props => props.width || '100%'};
  border-radius: 3px;

  & > * {
    color: white;
  }

  // If is not disabled
  ${props => !props.disabled && css`
    margin-top: 1px;
    margin: 1px 0 3px 0;
    border: 1px solid ${props => getDarker(props.theme.color.accent)};
    background-color: ${props => props.theme.color.accent};
    box-shadow: 0 5px 3px rgba(0, 0, 0, 0.15)
              , 0 3px 0 ${props => getDarker(props.theme.color.accent)};

    &:hover{
      margin: 0px 0 4px 0;
      box-shadow: 0 7px 4px rgba(0, 0, 0, 0.15)
                , 0 4px 0 ${props => getDarker(props.theme.color.accent)};
    }

    &:active{
      margin: 3px 0 1px 0;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15)
                , 0 1px 0 ${props => getDarker(props.theme.color.accent)};
    }
  `}
`;

PrimaryButton.defaultProps = {
  theme: {
    color:{
      accent: '#ED5757',
      disabled: '#9A9A9A'
    }
  }
}

export default PrimaryButton;
