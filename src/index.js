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

const elem = {
    valueItem: document.querySelector('.value-item'),
    addItem: document.querySelector('.add-item'),
    allItems: document.querySelector('.all-items')
}
const { valueItem, addItem, allItems, deleteItem } = elem;

const eventListener = (elem, event, fn) => elem.addEventListener(event, fn);

const MountStructure = {
    checkbox: value => {
        let elemCheck = document.createElement('input');
        elemCheck.type = 'checkbox';
        elemCheck.value = value;
        elemCheck.className = 'check';
        return elemCheck;
    },
    actionIcon: (element, icon) => {
        let actionIcon = document.createElement(element);
        actionIcon.innerHTML = icon;
        return actionIcon;
    },
    actions: el => {
        let boxActions = document.createElement('span');
        boxActions.className = 'box-actions';
        boxActions.appendChild(MountStructure.actionIcon('button', '<i id="'+ el +'" title="Save" class="d-none fas fa-cart-arrow-down"></i>'))
        boxActions.appendChild(MountStructure.actionIcon('button', '<i id="'+ el +'" title="Edit" class="fas fa-pen-square"></i>'))
        boxActions.appendChild(MountStructure.actionIcon('button','<i id="'+ el +'" title="Delete" class="fas fa-trash"></i>'))
        
        return boxActions;
    }
}

// List all items..
const listItem = async () => {
    fetchAPI(api).then( list => {
        let cItem;
        allItems.innerHTML = '';
        for(let item of list ){
            let lItem = document.createElement('li');
            lItem.className = 'border-list';
            lItem.innerHTML = `<span class="item">${item.item}</span>`;
            lItem.appendChild(MountStructure.checkbox(item.item));
            lItem.appendChild(MountStructure.actions(item.id));
            cItem = allItems.appendChild(lItem);
        }
        return cItem;
    })
    .then(removeList)
    .then(editList)
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
        })
        .then(list => listItem())
    })
}

// Delete items
const removeList = el => {
    let dItem = document.querySelectorAll('.fa-trash');
    dItem.forEach( el => {
        el.addEventListener('click', ({target}) => {
            let { id } = target;
            let exclude = e => {
                fetchAPI(`${api}/${id}`,{
                    method: 'DELETE',
                }).then(list => listItem())
            }
            (window.confirm('Are you sure want to exclude that item?')) && exclude();
        })
    })
}

// Edit List
const editList = () => {
    let eItem = document.querySelectorAll('.fa-pen-square');
    let sItem = document.querySelectorAll('.fa-cart-arrow-down');
    eItem.forEach( (el, idx) => {
        el.addEventListener('click', ({target}) => {
            let { id } = target;
            let reference = el.parentNode.parentNode.parentNode;
            let iRef = reference.querySelector('.item');

            iRef.setAttribute('contentEditable', true)
            sItem[idx].classList.remove('d-none');
            el.classList.add('d-none');
            reference.classList.add('shadow', 'rounded', 'border');
            iRef.classList.add('text-warning')
            iRef.focus();

            sItem[idx].addEventListener('click', e => {
                // console.log(id)
                fetchAPI(`${api}/${id}`,{
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({item: iRef.textContent})
                }).then(list => listItem())
            })
        })
    })
}

eventListener(window, 'load', e => {
    e.preventDefault();
    addList(addItem, valueItem);
    listItem();
})