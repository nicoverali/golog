import React from 'react';
import Button from './utils/Button';
import styled, {css} from 'styled-components';
import Color from 'color';
import classNames from 'classnames';

function getDarker(color){
  return Color(color).darken(0.05).hex();
}

const FlatButton = styled(Button)`
  height: ${props => props.height || '36px'};
  width: ${props => props.width || '100%'};
  border: none;
  border-radius: 3px;
  background-color: ${props => props.theme.color.accent};
  color: white;

  &:hover{
    background-color: ${props => getDarker(props.theme.color.accent)}
  }

  ${props => props.secondary && css`
    background: transparent;
    border: 2px solid ${props => props.theme.color.accent};
    color: ${props => props.theme.color.accent};

    &:hover{
      color: white;
    }
  `}
`

FlatButton.defaultProps = {
  theme:{
    color:{
      accent: '#ED5757'
    }
  }
}

export default FlatButton;
