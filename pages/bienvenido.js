import MainSection from '../components/MainSection';
import MultiButtonBody from '../components/bodies/MultiButtonBody';

const buttonConfig = [
  {
    text: 'Un jugador',
    href: '/juguemos'
  },
  {
    text: 'Dos jugadores',
    href: '/participantes'
  }
]

export default class App extends React.Component{

  static getInitialProps(p){
    console.log(p);
    return {};
  }

  render(){
    return (
      <MainSection title="Bienvenido.">
        <MultiButtonBody subtitle="Selecciona el modo de juego" buttonConfig={buttonConfig}/>
      </MainSection>
    )
  }

}
