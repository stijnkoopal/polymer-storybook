import {storiesOf} from '@storybook/polymer';
import {withKnobs, boolean} from '@storybook/addon-knobs/polymer';
import {action} from '@storybook/addon-actions';

import './feedback-button.html';

storiesOf('Feedback button', module)
  .addDecorator(withKnobs)
  .add('default view', () => {
    const el = document.createElement('feedback-button');
    el.disabled = boolean('Disabled?', false);
    el.addEventListener('press', ({detail}) => action('press')(detail));
    return el;
  });