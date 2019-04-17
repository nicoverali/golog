import React from 'react';
import Button from './utils/Button';
import styled, {css} from 'styled-components';
import Color from 'color';
import classNames from 'classnames';

function getDarker(color){
  return Color(color).desaturate(0.38).darken(0.18).hex();
}

const PrimaryButton = styled(Button)`
  margin-top: 4px;
  border: 1px solid ${props => getDarker(props.theme.color.disabled)};
  background-color: ${props => props.theme.color.disabled};
  position: relative;
  padding: 0px;
  margin: 0px;
  height: ${props => props.height || '51px'};
  width: ${props => props.width || '100%'};
  border-radius: 3px;
  color: white;

  // If is not disabled
  ${props => !props.disabled && css`
    border: 1px solid ${props => getDarker(props.theme.color.accent)};
    background-color: ${props => props.theme.color.accent};

    &::before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      top: 3px;
      left: -1px;
      width: 100%;
      height: 100%;
      background-color: ${props => getDarker(props.theme.color.accent)};
      border-radius: 3px;
      border: 1px solid ${props => getDarker(props.theme.color.accent)};
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
    }

    &:hover{
      margin-top: -1px;
    }

    &:hover::before{
      top:4px;
      box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
    }

    &:active{
      margin-top: 2px;
    }

    &:active::before{
      top:1px;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
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
