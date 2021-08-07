const api = 'http://localhost:3000/lista';

// Model fetch API..
const fetchAPI = (url, opt) => new Promise((resolve) => {
  fetch(url, opt)
    .then((json) => json.json())
    .then((res) => resolve(res));
});

const elem = {
  valueItem: document.querySelector('.value-item'),
  addItem: document.querySelector('.add-item'),
  allItems: document.querySelector('.all-items'),
};
const {
  valueItem, addItem, allItems,
} = elem;

const eventListener = (el, event, fn) => el.addEventListener(event, fn);

const MountStructure = {
  checkbox: (value) => {
    const elemCheck = document.createElement('input');
    elemCheck.type = 'checkbox';
    elemCheck.value = value;
    elemCheck.className = 'check';
    return elemCheck;
  },
  actionIcon: (element, icon) => {
    const actionIcon = document.createElement(element);
    actionIcon.innerHTML = icon;
    return actionIcon;
  },
  actions: (el) => {
    const boxActions = document.createElement('span');
    boxActions.className = 'box-actions';
    boxActions.appendChild(MountStructure.actionIcon('button', `<i id="${el}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`));
    boxActions.appendChild(MountStructure.actionIcon('button', `<i id="${el}" title="Edit" class="fas fa-pen-square"></i>`));
    boxActions.appendChild(MountStructure.actionIcon('button', `<i id="${el}" title="Delete" class="fas fa-trash"></i>`));

    return boxActions;
  },
};

let listItem;
let editList;

// Delete items
const removeList = () => {
  const dItem = document.querySelectorAll('.fa-trash');
  dItem.forEach((el) => {
    el.addEventListener('click', ({ target }) => {
      const { id } = target;
      const exclude = () => {
        fetchAPI(`${api}/${id}`, {
          method: 'DELETE',
        }).then(() => listItem());
      };
      if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line
        exclude();
      }
    });
  });
};

// List all items..
listItem = async () => {
  fetchAPI(api).then((list) => {
    let cItem;
    allItems.innerHTML = '';
    list.forEach((item) => {
      const lItem = document.createElement('li');
      lItem.className = 'border-list';
      lItem.innerHTML = `<span class="item">${item.item}</span>`;
      lItem.appendChild(MountStructure.checkbox(item.item));
      lItem.appendChild(MountStructure.actions(item.id));
      cItem = allItems.appendChild(lItem);
    });
    return cItem;
  })
    .then(removeList)
    .then(editList);
};

// Add items list
const addList = (elemAdd, elemValue) => {
  eventListener(elemAdd, 'click', async (e) => {
    e.preventDefault();
    const vItem = elemValue.value;
    fetchAPI(api, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: vItem }),
    })
      .then(() => listItem());
  });
};

// Edit List
editList = () => {
  const eItem = document.querySelectorAll('.fa-pen-square');
  const sItem = document.querySelectorAll('.fa-cart-arrow-down');
  eItem.forEach((el, idx) => {
    el.addEventListener('click', ({ target }) => {
      const { id } = target;
      const reference = el.parentNode.parentNode.parentNode;
      const iRef = reference.querySelector('.item');

      iRef.setAttribute('contentEditable', true);
      sItem[idx].classList.remove('d-none');
      el.classList.add('d-none');
      reference.classList.add('shadow', 'rounded', 'border');
      iRef.classList.add('text-warning');
      iRef.focus();

      sItem[idx].addEventListener('click', () => {
        // console.log(id)
        fetchAPI(`${api}/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ item: iRef.textContent }),
        }).then(() => listItem());
      });
    });
  });
};

eventListener(window, 'load', (e) => {
  e.preventDefault();
  addList(addItem, valueItem);
  listItem();
});
