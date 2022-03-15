import { ELEM } from "./modules";

import { eventListener } from "./services";

import { AddList, EditList, ListItem } from './controller'

eventListener(window, 'load', (e) => {
  e.preventDefault();
  AddList(ELEM.ADDITEM, ELEM.VALUEITEM);
  ListItem();
  EditList();
});
