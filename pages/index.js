import MainSection from '../components/MainSection';
import SingleButtonBody from '../components/bodies/SingleButtonBody';

const title = 'Golog.';
const subtitle = "La implementación de Go en Prolog";
const buttonConfig = {
  text: 'Jugar',
  href: '/bienvenido'
};

const Index = (props) => (
  <MainSection title={title} logo>
    <SingleButtonBody subtitle={subtitle} buttonConfig={buttonConfig}/>
  </MainSection>
);

export default Index;
