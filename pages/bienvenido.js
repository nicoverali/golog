import MainSection from '../components/MainSection';
import MultiButtonBody from '../components/bodies/MultiButtonBody';

const buttonConfig = [
  {
    text: 'Un jugador',
    href: '/juguemos-ia'
  },
  {
    text: 'Dos jugadores',
    href: '/participantes'
  }
]

const Bienvenido = (props) => (
      <MainSection title="Bienvenido." {...props}>
        <MultiButtonBody subtitle="Selecciona el modo de juego" buttonConfig={buttonConfig}/>
      </MainSection>
)

export default Bienvenido;
