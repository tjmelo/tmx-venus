const toCheckbox = (value) => {
  const elemCheckBox = document.createElement('input');
  elemCheckBox.type = 'checkbox';
  elemCheckBox.value = value;
  elemCheckBox.className = 'check';
  return elemCheckBox;
};

export default toCheckbox;
