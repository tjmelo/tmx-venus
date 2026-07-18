import toFetchAPI from './fetchAPI';

import { KEYS } from '../constants';

const toRemoveItems = () => {
  const item = document.querySelectorAll('.fa-trash');

  item.forEach((el) => {
    el.addEventListener('click', ({ target }) => {
      const referenceElementToRemove = el.parentNode.parentNode.parentNode;
      const { id } = target;
      const exclude = () => {
        toFetchAPI(`${KEYS.API}/${id}`, {
          method: 'DELETE',
        }).then(() => {
          referenceElementToRemove.remove();
          'vibrate' in navigator && navigator.vibrate(100);
        });
      };
      if (window.confirm('Are you sure want to exclude that item?')) {
        //eslint-disable-line
        exclude();
      }
    });
  });
};

const toRemoveBat = () => {
  const batAction = document.querySelector('.bat-actions-items');
  const inputChecked = document.querySelectorAll('.check');

  batAction.addEventListener('click', () => {
    inputChecked.forEach((el) => {
      const referenceElementToRemove = el.parentNode;
      if (el.checked) {
        toFetchAPI(`${KEYS.API}/${el.id}`, {
          method: 'DELETE',
        }).then(() => {
          referenceElementToRemove.remove();
          'vibrate' in navigator && navigator.vibrate(100);
        });
      }
    });
  });
};

export { toRemoveItems, toRemoveBat };