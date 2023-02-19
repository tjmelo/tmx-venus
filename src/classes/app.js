import { KEYS, ELEM } from './constants';

class App {
  constructor() {
    this.toListItems();
    this.toAddList(ELEM.ADD_ITEM);
  }

  async #toFetchAPI(api, params = {}) {
    this.api = await fetch(api, params);
    this.data = await this.api.json();
    return this.data;
  }

  async toListItems() {
    this.list = await this.#toFetchAPI(KEYS.API);
    ELEM.ALL_ITEMS.innerHTML = '';

    this.list.forEach((item) => {
      const nodeItem = document.createElement('li');
      nodeItem.className = 'border-list list-group-item';
      nodeItem.innerHTML = `<span class="item">${item.description}</span>`;
      nodeItem.appendChild(this.#toCheckbox(item.description));
      nodeItem.appendChild(this.#toActions(item.id));
      return ELEM.ALL_ITEMS.appendChild(nodeItem);
    });

    this.toEdit();
    this.toRemoveItem();
  }

  #toCheckbox(value) {
    this.elemCheck = document.createElement('input');
    this.elemCheck.type = 'checkbox';
    this.elemCheck.value = value;
    this.elemCheck.className = 'check';
    return this.elemCheck;
  }

  #toActionIcon(element, icon) {
    this.actionIcon = document.createElement(element);
    this.actionIcon.innerHTML = icon;
    return this.actionIcon;
  }

  #toActions(element) {
    const boxActions = document.createElement('span');
    boxActions.className = 'box-actions';
    boxActions.appendChild(this.#toActionIcon('button', `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`));
    boxActions.appendChild(this.#toActionIcon('button', `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`));
    boxActions.appendChild(this.#toActionIcon('button', `<i id="${element}" title="Delete" class="fas fa-trash"></i>`));
    return boxActions;
  }

  toAddList(elemAdd) {
    elemAdd.addEventListener('click', async (e) => {
      const elementValue = document.querySelector('.value-item');
      e.preventDefault();
      const newItem = elementValue.value;
      this.#toFetchAPI(KEYS.API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: newItem }),
      })
        .then(() => {
          this.toListItems();
          elementValue.value = '';
        })
        .catch((error) => console.error(error));
    });
  }

  toEdit() {
    const toEditItem = document.querySelectorAll('.fa-pen-square');
    const toEditeditem = document.querySelectorAll('.fa-cart-arrow-down');
    toEditItem.forEach((el, idx) => {
      el.addEventListener('click', ({ target }) => {
        const { id } = target;
        const reference = el.parentNode.parentNode.parentNode;
        const itemReference = reference.querySelector('.item');
        reference.classList.add('bg-light');
        itemReference.setAttribute('contentEditable', true);

        toEditeditem[idx].classList.remove('d-none');
        el.classList.add('d-none');
        reference.classList.add('shadow', 'text-primary');
        itemReference.focus();

        toEditeditem[idx].addEventListener('click', () => {
          this.#toFetchAPI(`${KEYS.API}/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ description: itemReference.textContent }),
          }).then(() => this.toListItems());
        });
      });
    });
  }

  toRemoveItem() {
    const item = document.querySelectorAll('.fa-trash');
    item.forEach((el) => {
      el.addEventListener('click', ({ target }) => {
        const { id } = target;
        const exclude = () => {
          this.#toFetchAPI(`${KEYS.API}/${id}`, {
            method: 'DELETE',
          }).then(() => this.toListItems());
        };
        if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line
          exclude();
        }
      });
    });
  }
}

export default App;
