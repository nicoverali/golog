import styled, {css} from 'styled-components';
import {Subtitle, ButtonText, Quote} from '../utils/Typography';
import Link from 'next/link';

import PrimaryButton from '../PrimaryButton';
import UserInput from '../UserInput';

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledUserInput = styled(UserInput)`
  margin-top: 16px
`

export default class UserInputBody extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      firstInput: '',
      secondInput: '',
      firstInputWarning: null,
      secondInputWarning: null
    }
    this.maxInputLength = 20;
  }

  handleChange(e, input){
    const value = e.target.value;
    let newState = {};
    if(value.length > this.maxInputLength){
      let warningProp = input+'Warning';
      newState[warningProp] = `No se puede superar los ${this.maxInputLength} caracteres`;
      this.removeWarningMessage(warningProp)
    }
    else{
      newState[input] = value;
      newState[(input+'Warning')] = null;
    }
    this.setState(newState);
  }

  removeWarningMessage(warningProp){
    setTimeout(() => {
      let newState = {};
      newState[warningProp] = null;
      this.setState(newState);
    }, 2000);
  }

  inputsAreNotFilled(){
    return this.state.firstInput.length == 0 || this.state.secondInput.length == 0;
  }

  createQueryParams(){
    return `?firstName=${this.state.firstInput}&secondName=${this.state.secondInput}`
  }

  render(){
    return (
        <StyledDiv {...this.props}>
          <div>
            <StyledUserInput
              handleChange={(e) => this.handleChange(e, 'firstInput')}
              name='Jugador blancas'
              inputValue={this.state.firstInput}
              errorMessage={this.state.firstInputWarning}/>
            <StyledUserInput
              handleChange={(e) => this.handleChange(e, 'secondInput')}
              name='Jugador negras'
              inputValue={this.state.secondInput}
              errorMessage={this.state.secondInputWarning}/>
          </div>
          <Link prefetch
            href={this.props.buttonConfig.href + this.createQueryParams()}
            as={this.props.buttonConfig.href}>
            <a>
              <PrimaryButton width="270px" disabled={this.inputsAreNotFilled()}>
                <ButtonText>{this.props.buttonConfig.text}</ButtonText>
              </PrimaryButton>
            </a>
          </Link>
        </StyledDiv>
    )
  }
}
