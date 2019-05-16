import MainSection from '../components/MainSection';
import CompetitorsBody from '../components/bodies/CompetitorsBody';

const Jugemos = (props) => {
  let buttonConfig = {
    text: 'Comenzar',
    href: props.href,
    hrefAs: props.hrefAs
  }

  return (
    <MainSection title="Jugemos." {...props}>
      <CompetitorsBody subtitle="Que gane el mejor" competitors={props.competitors} buttonConfig={buttonConfig}/>
    </MainSection>
  )
}

Jugemos.getInitialProps = ({query}) => ({
  href: `/go?firstName=${query.firstName}&secondName=${query.secondName}`,
  hrefAs: '/go',
  competitors: [
    {
      icon: 'User',
      name: query.firstName
    },
    {
      icon: 'User',
      name: query.secondName
    }
  ]
})

export default Jugemos;
