import {storiesOf} from '@storybook/polymer';
import {html, render} from 'lit-html';

import './with-slots.html';

storiesOf('Withs slots', module)
  .add('default view', () => {
    const el = document.createElement('with-slots');

    const header = document.createElement('h1');
    header.slot = 'header';
    header.innerHTML = 'Injected header!';
    el.appendChild(header);

    const paragraph = document.createElement('p');
    paragraph.innerHTML = 'Injected paragraph!';
    el.appendChild(paragraph);

    return el;
  })
  .add('bonus: with lit-html', () => {
    const el = document.createElement('div');
    render(html`
      <with-slots>
        <h1 slot="header">Injected header!</h1>
        <p>Injected paragraph</p>
      </with-slots>
    `, el);
    return el
  });