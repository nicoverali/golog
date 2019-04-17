import { storiesOf } from '@storybook/react';

export default (name, Component, otherProps = {}) => {
  function handleClick(){
    console.log('Clicked !');
  }

  let stories = storiesOf(name, module)
  .add('With text', () => (
    <Component width="160px">Hello Button</Component>
  ))
  .add('With emoji', () => (
    <Component width="270px" disabled><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Component>
  ))
  .add('With container', () => (
    <div style={{width:'180px'}}>
      <Component>It's in a container</Component>
    </div>
  ))
  .add('With click handler', () => (
    <Component width='270px' handleClick={handleClick}>Check console</Component>
  ))
  .add('With click handler but disabled', () => (
    <Component width='270px' handleClick={handleClick} disabled>Check console</Component>
  ));

  for(let prop in otherProps){
    let obj = {};
    obj[prop] = true;
    stories.add(`With prop ${otherProps[prop]}`, () => (
      <Component width='270px' {...obj}>Button with {otherProps[prop]}</Component>
    ))
  }

  return stories;
}
