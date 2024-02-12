import toActionIcon from './ActionIcon';

const toAppendIconActions = (box, el) => {
  box.appendChild(
    toActionIcon('button', `<i id="${el}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`),
  );
  box.appendChild(
    toActionIcon('button', `<i id="${el}" title="Edit" class="fas fa-pen-square"></i>`),
  );
  box.appendChild(toActionIcon('button', `<i id="${el}" title="Delete" class="fas fa-trash"></i>`));
};

const toActions = (element) => {
  const boxActions = document.createElement('span');
  boxActions.className = 'box-actions';

  toAppendIconActions(boxActions, element);

  return boxActions;
};

export default toActions;
