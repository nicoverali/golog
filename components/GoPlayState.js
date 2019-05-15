import styled from 'styled-components';
import CurrentPlayTimer from './CurrentPlayTimer';
import DoubleVerticalButtons from './DoubleVerticalButtons';
import PrimaryButton from './PrimaryButton';
import {ButtonText} from './utils/Typography';
import {BlackStone, WhiteStone} from './Stone';

const StyledContainer = styled.div`
  border: 1px solid ${props => props.theme.color.lightDark4};
  height: 200px;
  width: 500px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-items: center;
  align-items: center;

  &>*{
    flex-grow: 1;
  }
`

const GoPlayState = ({onPlay, onPass, isAbleToPlay, currentPlayer, ...props}) => {
  let topButton = (
    <PrimaryButton onClick={onPlay} disabled={!isAbleToPlay}>
      <ButtonText>Enviar jugada</ButtonText>
    </PrimaryButton>
  )

  let bottomButton = (
    <PrimaryButton onClick={onPass}>
      <ButtonText>Ceder el turno</ButtonText>
    </PrimaryButton>
  )

  let stone = createStone(currentPlayer.symbol);

  return (
    <StyledContainer {...props}>
      <CurrentPlayTimer stone={stone} playerName={currentPlayer.name} minutes={10} seconds={0}/>
      <DoubleVerticalButtons topButton={topButton} bottomButton={bottomButton}/>
    </StyledContainer>
  )
}

function createStone(sym){
  switch (sym) {
    case 'b':
      return <BlackStone/>
    case 'w':
      return <WhiteStone/>
  }
}

export default GoPlayState;
