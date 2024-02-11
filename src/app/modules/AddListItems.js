import toListItems from './ListItems';
import toFetchAPI from './fetchAPI';

import { KEYS } from '../constants';

const toAddList = (elemAdd) => {
  return elemAdd.addEventListener('click', (e) => {
    const elementValue = document.querySelector('.value-item');
    e.preventDefault();

    const newItem = elementValue.value;

    toFetchAPI(KEYS.API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: newItem }),
    })
      .then(() => {
        toListItems();
        elementValue.value = '';
      })
      .catch((error) => console.error(error)); //eslint-disable-line
  });
};

export default toAddList;
