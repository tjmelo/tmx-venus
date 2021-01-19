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
      addItem = document.querySelector('.add-item'),
      allItems = document.querySelector('.all-items');

const eventListener = (elem, event, fn) => elem.addEventListener(event, fn);


// List all items..
const listItem = async () => {
    fetchAPI(api).then( list => {
        let cItem;
        allItems.innerHTML = '';
        for(let item of list ){
            console.log(item);
            let lItem = document.createElement('li');
            lItem.className = 'border-list';
            lItem.textContent = item.item;
            cItem = allItems.appendChild(lItem);
        }
        return cItem;
    })

}

// Add items list
const addList = (elemAdd, elemValue) => {
    eventListener (elemAdd, 'click', async (e) => {
        e.preventDefault();
        let vItem = elemValue.value;
        fetchAPI(api, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({item: vItem})
        }).then(list => listItem())
    })
}


eventListener(window, 'load', (e) => {
    e.preventDefault();
    addList(addItem, valueItem);
    listItem()
})