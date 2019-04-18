import PrimaryButton from '../components/PrimaryButton';
import FlatButton from '../components/FlatButton';
import Button from '../components/utils/Button';
import SVG from '../components/utils/SVG';
import Competitor from '../components/Competitor';
import UserInput from '../components/UserInput';
import {ThemeProvider} from 'styled-components';
import theme from '../components/theme';
import {WhiteStone, BlackStone} from '../components/Stone';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {secondary:false};
  }

  handleClick(){
    this.setState({secondary:!this.state.secondary});
  }

  render(){
    let button;
    if(this.state.secondary){
      button = (<FlatButton handleClick={() => this.handleClick()} secondary>Jugar !</FlatButton>)
    }
    else{
      button = (<FlatButton handleClick={() => this.handleClick()}>Jugar !</FlatButton>)
    }

    return (
      <ThemeProvider theme={theme}>
        <div style={{width:'270px'}}>
          {button}
          <UserInput></UserInput>
          <Competitor icon="User" name="Nicolas"/>
          <WhiteStone/>
          <BlackStone/>
        </div>
      </ThemeProvider>
    )
  }

}
