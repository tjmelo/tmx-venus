import toCheckbox from '../modules/CheckboxItems';

const DOMCompare = "<input class='check' type='checkbox' value='test description' />";
document.body.innerHTML = DOMCompare;
const testElementToBeCompared = document.querySelector('input.check');

describe('Should get a param and render a checkbox', () => {
  it('Should render a checkbox', () => {
    const testToCheckbox = jest.fn();
    const testParamValue = 'test description';

    testToCheckbox.mockImplementation((argTest) => toCheckbox(argTest));

    // do
    testToCheckbox(testParamValue);

    // then
    expect(testToCheckbox).toHaveReturned();
    expect(testToCheckbox).toHaveBeenCalledWith(testParamValue);
    expect(testToCheckbox).toHaveBeenCalledTimes(1);
    expect(testToCheckbox).toHaveReturnedWith(testElementToBeCompared);

    // Expects fidelity with scope of function
    expect(testToCheckbox).toMatchSnapshot();
  });
});
