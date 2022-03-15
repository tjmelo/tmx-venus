import { 
  api, 
  fetchAPI,
} from "../modules";

import { ListItem } from "./listitem";

// Edit List
const EditList = () => {
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
        }).then(() => ListItem());
      });
    });
  });
};

export { EditList }
