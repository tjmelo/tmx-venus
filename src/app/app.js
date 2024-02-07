import { ELEM } from './constants';

import toAddList from './modules/AddListItems';
import toListItems from './modules/ListItems';

class App {
  constructor() {
    this.toListItems = toListItems();
    this.toAddList = toAddList(ELEM.ADD_ITEM);
  }
}

export default App;
