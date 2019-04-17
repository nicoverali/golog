import { storiesOf } from '@storybook/react';
import * as Typo from '../components/utils/Typography';

export default () => {
  let stories = storiesOf('Typography', module);
  for(let type in Typo){
    console.log(Typo[type]);
    let Component = Typo[type];
    stories = stories.add(type, () => (
      <Component>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Component> 
    ))
  }
}
