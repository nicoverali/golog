import PrimaryButton from '../components/PrimaryButton';
import FlatButton from '../components/FlatButton';
import Button from '../components/utils/Button';

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
      <div style={{width:'270px'}}>
        {button}
      </div>
    )
  }

}
