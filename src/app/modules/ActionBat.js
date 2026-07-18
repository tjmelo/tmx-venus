const toActionBat = (element, icon) => {
    const actionIcon = document.createElement(element);
    actionIcon.innerHTML = icon;
    return actionIcon;
  };
  
  export default toActionBat;
  