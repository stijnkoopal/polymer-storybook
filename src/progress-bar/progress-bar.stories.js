import {storiesOf} from '@storybook/polymer';
import {withKnobs, number, boolean, color} from '@storybook/addon-knobs/polymer';

import './progress-bar.html';

const percentageRange = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
};

storiesOf('Progress bar', module)
  .addDecorator(withKnobs)
  .add('Default', () => '<progress-bar value="50"></progress-bar>')
  .add('With Knobs!', () => {
    const el = document.createElement('progress-bar');
    el.value = number('Percentage', 50, percentageRange);
    el.reverse = boolean('Reversed', false);
    return el;
  })
  .add('Moving', () => {
    const el = document.createElement('progress-bar');
    const update = () => {
      el.value = (Number.parseInt(el.value) + 1) % 100;
      window.requestAnimationFrame(update);
    };

    el.value = 0;
    window.requestAnimationFrame(update);
    return el;
  })
  .add('Styled', () => {
    const properties = ({
      '--progress-bar-background-color': color('Background color', 'red', 'colors'),
      '--progress-bar-font-color': color('Font color', 'white', 'colors'),
      '--progress-bar-color': color('Foreground color', 'black', 'colors'),
    });
    const el = document.createElement('progress-bar');
    Object.keys(properties).forEach(key => el.style.setProperty(key, properties[key]));
    el.value = number('Percentage', 50, percentageRange);
    el.reverse = boolean('Reversed', false);
    return el;
  });
