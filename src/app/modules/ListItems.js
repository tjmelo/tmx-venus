import toActions from './ActionsItems';
import toCheckbox from './CheckboxItems';
import toFetchAPI from './fetchAPI';

import { KEYS, ELEM } from '../constants';
import toEditItems from './EditItems';
import toRemoveItems from './RemoveItems';

const toListItems = async () => {
  const listItemsByAPI = await toFetchAPI(KEYS.API);
  ELEM.ALL_ITEMS.innerHTML = '';

  listItemsByAPI.forEach((item) => {
    const nodeItem = document.createElement('li');
    nodeItem.className = 'border-list list-group-item';
    nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
    nodeItem.appendChild(toCheckbox(item.description));
    nodeItem.appendChild(toActions(item.id));
    return ELEM.ALL_ITEMS.appendChild(nodeItem);
  });

  toEditItems();
  toRemoveItems();
};

export default toListItems;
