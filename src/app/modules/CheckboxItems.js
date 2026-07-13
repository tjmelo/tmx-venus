const toCheckbox = (value, id) => {
  const elemCheckBox = document.createElement('input');
  elemCheckBox.type = 'checkbox';
  elemCheckBox.value = value;
  elemCheckBox.id = id;
  elemCheckBox.className = 'check';
  elemCheckBox.addEventListener('change', () => {
    elemCheckBox.className = elemCheckBox.checked ? 'check checked' : 'check';
  });
  return elemCheckBox;
};

export default toCheckbox;
