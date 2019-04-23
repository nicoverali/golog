import MainSection from '../components/MainSection';
import StartBody from '../components/bodies/StartBody';

const buttonConfig = {
    text: 'Un jugador',
    href: '/juguemos'
  };

export default class App extends React.Component{

  static getInitialProps(p){
    console.log(p);
    return {};
  }

  render(){
    return (
      <MainSection title="Jugemos.">
        <StartBody subtitle="¿Podrás con nuestra IA?" competitors={[{icon:'User', name:'Nicolas'}, {icon:'Golguito', name:'Golguito'}]} buttonConfig={buttonConfig}/>
      </MainSection>
    )
  }

}
