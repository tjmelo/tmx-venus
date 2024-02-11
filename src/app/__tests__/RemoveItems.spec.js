import toRemoveItems from '../modules/RemoveItems';
import toFetchAPI from '../modules/fetchAPI';

import { KEYS } from '../constants';

jest.mock('../modules/fetchAPI');
jest.mock('../modules/RemoveItems');

describe('Should to remove a determinate items from app', () => {
  it('Should request toFetchAPI for get determinate item', () => {
    const testToFetchAPI = jest.fn();
    testToFetchAPI.mockImplementation((argTest) => toFetchAPI(argTest));

    // do
    testToFetchAPI(KEYS.API);

    // then
    expect(testToFetchAPI).toHaveReturned();
    expect(testToFetchAPI).toHaveBeenCalledTimes(1);
    expect(testToFetchAPI).toHaveBeenCalledWith(KEYS.API);

    // Expects fidelity with scope of function
    expect(testToFetchAPI).toMatchSnapshot();
  });

  it('Should delete an item', () => {
    const testToRemoveItems = jest.fn();
    testToRemoveItems.mockImplementation(() => toRemoveItems());

    const testToFetchAPI = jest.fn();
    testToFetchAPI.mockImplementation((argTest) => toFetchAPI(argTest));

    jest.spyOn(window, 'addEventListener').mockImplementationOnce((event, handler) => {
      const testToDeleteAnItemOnClick = handler(toFetchAPI(`${KEYS.API}/123456789`));
      return testToDeleteAnItemOnClick;
    });

    // do
    testToRemoveItems();
    window.addEventListener('click', (e) => e);

    // then
    expect(testToRemoveItems).toHaveReturned();
    expect(testToRemoveItems).toHaveBeenCalledTimes(1);
    expect(window.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));

    // Expects fidelity with scope of function
    expect(testToRemoveItems).toMatchSnapshot();
  });
});
