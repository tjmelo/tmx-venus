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

export { MountStructure }
