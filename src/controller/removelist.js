// Delete items

import { 
    api, 
    fetchAPI,
} from "../modules";

import { ListItem } from "./listitem";

const RemoveList = () => {
    const dItem = document.querySelectorAll('.fa-trash');
    dItem.forEach((el) => {
        el.addEventListener('click', ({ target }) => {
        const { id } = target;
        const exclude = () => {
            fetchAPI(`${api}/${id}`, {
            method: 'DELETE',
            }).then(() => ListItem());
        };
        if (window.confirm('Are you sure want to exclude that item?')) { //eslint-disable-line
            exclude();
        }
        });
    });
};

export { RemoveList }
