import MainSection from '../components/MainSection';
import UserInputBody from '../components/bodies/UserInputBody';

const buttonConfig = {
    text: 'Listo',
    href: '/juguemos'
  };

const Participantes = (props) => (
      <MainSection title="Participantes." {...props}>
        <UserInputBody buttonConfig={buttonConfig}/>
      </MainSection>
)

export default Participantes;
