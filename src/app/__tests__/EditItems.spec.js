import toEditItems, { toEditingItems } from '../modules/EditItems';

jest.mock('../modules/EditItems');

const params = {
  parentNodeReference: 'parentNodeReference',
  itemNodeReference: 'itemNodeReference',
  toEditedItemI: 'toEditedItemI',
  el: 'el',
};

describe('Should edit the value of an item', () => {
  it('Should edit an item', () => {
    const testToEditItems = jest.fn();

    const testImplementationMock = () => toEditItems();

    testToEditItems.mockImplementation(testImplementationMock);

    // do
    testToEditItems();

    // then
    expect(testToEditItems).toHaveReturned();
    expect(testToEditItems).toHaveBeenCalledTimes(1);

    // Expects fidelity with scope of function
    expect(testToEditItems).toMatchSnapshot();
  });

  it('Should edit as a status', () => {
    const testEditingItemsStatus = jest.fn();

    testEditingItemsStatus.mockImplementation((param, status) => toEditingItems(param, status));

    // do
    testEditingItemsStatus(params, true);

    // then
    expect(testEditingItemsStatus).toHaveReturned();
    expect(testEditingItemsStatus).toHaveBeenCalledTimes(1);

    // Expects fidelity with scope of function
    expect(testEditingItemsStatus).toMatchSnapshot();
  });
});
