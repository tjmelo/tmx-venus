// Add items list

import { 
    api, 
    fetchAPI,
} from "../modules";

import { ListItem } from "./listitem";

import { eventListener } from "../services";

const AddList = (elemAdd, elemValue) => {
    eventListener(elemAdd, 'click', async (e) => {
        e.preventDefault();
        const vItem = elemValue.value;
        fetchAPI(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ item: vItem }),
        })
        .then(() => ListItem());
    });
};

export { AddList }
