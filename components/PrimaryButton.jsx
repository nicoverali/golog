import React from 'react';
import styled from 'styled-components';
import Color from 'color';

const StyledButton = styled.button`
  position: relative;
  padding: 0px;
  margin: 0px;
  height: 51px;
  width: ${props => props.width};
  border: 1px solid ${props => Color(props.theme.colors.accent).desaturate(0.38).darken(0.18).hex()};
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.accent};
  color: white;
  margin-top: 4px;

  &.enabled{
    margin-top: 0px;
  }

  &.enabled::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    top: 3px;
    left: -1px;
    width: 100%;
    height: 100%;
    background-color: ${props => Color(props.theme.colors.accent).desaturate(0.38).darken(0.18).hex()};
    border-radius: ${props => props.theme.radius};
    border: 1px solid ${props => Color(props.theme.colors.accent).desaturate(0.38).darken(0.18).hex()};
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  }

  &.enabled:hover{
    margin-top: -1px;
  }

  &.enabled:hover::before{
    top:4px;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  }

  &.enabled:active{
    margin-top: 2px;
  }

  &.enabled:active::before{
    top:1px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

export default class PrimaryButton extends React.Component {
  static defaultProps = {
    theme: {
      colors:{
        accent: '#ED5757'
      },
      radius: '3px'
    },
    width: '270px'
  }

  render(){
    return (
      <StyledButton
        theme={this.props.theme}
        width={this.props.width}
        className={this.props.disabled ? '' : 'enabled'}
      >
        {this.props.children}
      </StyledButton>
    )
  }
}
