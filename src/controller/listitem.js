// List all items..
import { MountStructure } from "./structure"
import {  RemoveList } from "./removelist"
import { EditList } from "./editlist";

import { 
    api, 
    fetchAPI,
    ELEM
} from "../modules";

const ListItem = async () => {
    fetchAPI(api).then((list) => {
        let cItem;
        ELEM.ALLITEMS.innerHTML = '';
        list.forEach((item) => {
        const lItem = document.createElement('li');
        lItem.className = 'border-list';
        lItem.innerHTML = `<span class="item">${item.item}</span>`;
        lItem.appendChild(MountStructure.checkbox(item.item));
        lItem.appendChild(MountStructure.actions(item.id));
        cItem = ELEM.ALLITEMS.appendChild(lItem);
        });
        return cItem;
    })
    .then(RemoveList)
    .then(EditList);
};

export { ListItem }
  