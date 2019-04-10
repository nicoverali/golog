import React from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  position: relative;
  height: 51px;
  width: ${props => props.width};
  border: 1px solid ${props => props.theme.colors.accentDark};
  border-radius: ${props => props.theme.radius};
  background-color: ${props => props.theme.colors.accent};
  color: white;

  &.disabled{
    margin-top: 4px;
    border: 1px solid ${props => props.theme.colors.disabledDark};
    background-color: ${props => props.theme.colors.disabled};
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
    background-color: ${props => props.theme.colors.accentDark};
    border-radius: ${props => props.theme.radius};
    border: 1px solid ${props => props.theme.colors.accentDark};
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
  constructor(props){
    super(props);
    this.state = {state: this.props.disabled ? 'disabled' : 'enabled'};
  }

  static defaultProps = {
    theme: {
      colors:{
        accent: '#ED5757',
        accentDark: '#BF4949',
        disabled: '#9A9A9A',
        disabledDark : '#737373'
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
        className={this.state.state}
      >
        {this.props.children}
      </StyledButton>
    )
  }
}
