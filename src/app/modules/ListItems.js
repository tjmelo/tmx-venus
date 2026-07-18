import { toActions, toActionBat } from './ActionsItems';
import toCheckbox from './CheckboxItems';
import toFetchAPI from './fetchAPI';

import { KEYS, ELEM } from '../constants';
import toEditItems from './EditItems';
import { toRemoveItems, toRemoveBat } from './RemoveItems';

const toListItems = async () => {
  const listItemsByAPI = await toFetchAPI(KEYS.API);
  ELEM.ALL_ITEMS.innerHTML = '';
  ELEM.BAT_ACTIONS_ITEMS.innerHTML = '';

  ELEM.BAT_ACTIONS_ITEMS.appendChild(toActionBat());

  listItemsByAPI.forEach((item) => {
    const nodeItem = document.createElement('li');
    nodeItem.className = 'border-list list-group-item';
    nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
    nodeItem.appendChild(toCheckbox(item.description, item.id));
    nodeItem.appendChild(toActions(item.id));
    return ELEM.ALL_ITEMS.appendChild(nodeItem);
  });

  toEditItems();
  toRemoveItems();
  toRemoveBat();
};

export default toListItems;
