import toAddList from '../modules/AddListItems';

document.body.innerHTML = '<button id="button"/>';
const testButtonAddToList = document.querySelector('#button');

describe('Should render function to Add new item in list', () => {
  it('Should render call function with reference button', () => {
    const testToAddList = jest.fn();

    testToAddList.mockImplementation((argTest) => toAddList(argTest));

    // do
    testToAddList(testButtonAddToList);

    // then
    expect(testToAddList).toHaveReturned();
    expect(testToAddList).toHaveBeenCalledWith(testButtonAddToList);
    expect(testToAddList).toHaveBeenCalledTimes(1);

    // Expects fidelity with scope of function
    expect(testToAddList).toMatchSnapshot();
  });
});
