import toActions from '../modules/ActionsItems';

const mockElementID = {
  id: 10,
  element: 'some',
};

describe('Should verify if the toActions function receives a determinated params', () => {
  it('Should mount structure action for item', () => {
    const testActions = jest.fn();

    testActions.mockImplementationOnce((argTest1) => toActions(argTest1));

    // do
    testActions(mockElementID.id);

    // then
    expect(testActions).toHaveReturned();
    expect(testActions).toHaveBeenCalledTimes(1);
    expect(testActions).toHaveBeenCalledWith(mockElementID.id);

    // Expects fidelity with scope of function
    expect(testActions).toMatchSnapshot();
  });
});
