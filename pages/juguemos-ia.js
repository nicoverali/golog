import MainSection from '../components/MainSection';
import CompetitorsBody from '../components/bodies/CompetitorsBody';

const buttonConfig = {
    text: 'Comenzar',
    href: '/juguemos'
  };

let competitors = [
    {
      icon: 'User',
      name: 'Tú'
    },
    {
      icon: 'Golguito',
      name: 'Golguito'
    }
]

const Juguemos = (props) => (
      <MainSection title="Jugemos." {...props}>
        <CompetitorsBody subtitle="¿Podrás con nuestra IA?" competitors={competitors} buttonConfig={buttonConfig}/>
      </MainSection>
)

export default Juguemos;
