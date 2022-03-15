// Delete items

import { 
    api, 
    fetchAPI,
} from "../modules";

import { ListItem } from "./listitem";
import { eventListener } from '../services'

const DOM = () => {
    return {
        DITEM: document.querySelectorAll('.fa-trash')
    }

}

const RemoveList = () => {
    DOM().DITEM.forEach((el) => {
        eventListener(el, 'click', ({ target }) => {
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
