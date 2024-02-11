import toActionIcon from '../modules/ActionIcon';

const testArgs = {
  testButtonElement: 'button',
  testIconReference: '<i id="icon-test" title="Test" class="d-none fas fa-cart-arrow-test"></i>',
};

document.body.innerHTML = `<${testArgs.testButtonElement}>${testArgs.testIconReference}</${testArgs.testButtonElement}>
`;

describe('Should verify if the toActionIcon function has been called', () => {
  const testElementToBeCompared = document.querySelector('button');

  it('Should to call the function', () => {
    const testActionIcon = jest
      .fn()
      .mockImplementationOnce((argTest1, argTest2) => toActionIcon(argTest1, argTest2));

    const { testButtonElement, testIconReference } = testArgs;

    // do
    testActionIcon(testButtonElement, testIconReference);

    // then
    expect(testActionIcon).toHaveReturned();
    expect(testActionIcon).toHaveBeenCalledTimes(1);
    expect(testActionIcon).toHaveBeenCalledWith(testButtonElement, testIconReference);

    expect(testActionIcon).toHaveReturnedWith(testElementToBeCompared);

    // Expects fidelity with scope of function
    expect(testActionIcon).toMatchSnapshot();
  });
});
