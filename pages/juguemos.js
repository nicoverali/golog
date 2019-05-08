import MainSection from '../components/MainSection';
import CompetitorsBody from '../components/bodies/CompetitorsBody';

const buttonConfig = {
    text: 'Comenzar',
    href: '/go'
  };

const Jugemos = (props) => (
      <MainSection title="Jugemos." {...props}>
        <CompetitorsBody subtitle="Que gane el mejor" competitors={props.competitors} buttonConfig={buttonConfig}/>
      </MainSection>
)

Jugemos.getInitialProps = (p) => ({
  competitors: [
    {
      icon: 'User',
      name: p.query.firstName
    },
    {
      icon: 'User',
      name: p.query.secondName
    }
  ]
})

export default Jugemos;
