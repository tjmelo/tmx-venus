'use strict';

const api = 'http://localhost:3000/lista';

// Model fetch API..
const fetchAPI = (url, opt) => {
    return new Promise(resolve => {
        fetch(url, opt)
        .then(json => json.json())
        .then(res => resolve(res));
    })
    
}

const valueItem = document.querySelector('.value-item'),
      addItem = document.querySelector('.add-item');

const eventListener = (elem, event, fn) => elem.addEventListener(event, fn);


// List all items..
const listItem = async () => {
    fetchAPI(api).then( list => {
        console.log(list);
    })

}

// Add items list
const addList = (elemAdd, elemValue) => {
    return eventListener(elemAdd, 'click', () => {
        let vItem = elemValue.value;
        fetchAPI(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({item: vItem})
        })

    })
}


eventListener(window, 'load', (e) => {
    e.preventDefault();
    addList(addItem, valueItem);
    listItem()
})