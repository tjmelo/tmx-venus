import toActionIcon from './ActionIcon';

const toActions = (element) => {
  const boxActions = document.createElement('span');
  boxActions.className = 'box-actions';
  boxActions.appendChild(toActionIcon('button', `<i id="${element}" title="Save" class="d-none fas fa-cart-arrow-down"></i>`));
  boxActions.appendChild(toActionIcon('button', `<i id="${element}" title="Edit" class="fas fa-pen-square"></i>`));
  boxActions.appendChild(toActionIcon('button', `<i id="${element}" title="Delete" class="fas fa-trash"></i>`));
  return boxActions;
};

export default toActions;
