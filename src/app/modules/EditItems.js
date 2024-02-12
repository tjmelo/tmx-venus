import toFetchAPI from './fetchAPI';
import { KEYS } from '../constants';

const toEdited = ({ parentNodeReference, itemNodeReference, toEditedItemI, el }) => {
  itemNodeReference.removeAttribute('contentEditable');
  toEditedItemI.classList.add('d-none');
  el.classList.remove('d-none');
  parentNodeReference.classList.remove('bg-light', 'shadow', 'text-primary');
};

const toInEdit = ({ parentNodeReference, itemNodeReference, toEditedItemI, el }) => {
  toEditedItemI.classList.remove('d-none');
  el.classList.add('d-none');
  parentNodeReference.classList.add('bg-light', 'shadow', 'text-primary');
  itemNodeReference.setAttribute('contentEditable', true);
  itemNodeReference.focus();
};

export const toEditingItems = (itemNodeReferences, statusEdit) => {
  statusEdit ? toInEdit(itemNodeReferences) : toEdited(itemNodeReferences);
};

const toEditItems = async () => {
  const toEditItem = document.querySelectorAll('.fa-pen-square');
  const toEditeditem = document.querySelectorAll('.fa-cart-arrow-down');

  toEditItem.forEach((el, idx) => {
    el.addEventListener('click', async ({ target }) => {
      const { id } = target;
      const parentNodeReference = el.parentNode.parentNode.parentNode;
      const itemNodeReference = parentNodeReference.querySelector('.item');

      const params = {
        parentNodeReference,
        itemNodeReference,
        toEditedItemI: toEditeditem[idx],
        el,
      };

      toEditingItems(params, true);

      toEditeditem[idx].addEventListener('click', async () => {
        await toFetchAPI(`${KEYS.API}/${id}`, {
          method: 'PUT',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            description: itemNodeReference.textContent,
          }),
        }).then(() => toEditingItems(params, false));
      });
    });
  });
};

export default toEditItems;
