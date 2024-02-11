import toListItems from '../modules/ListItems';
import toFetchAPI from '../modules/fetchAPI';

import { KEYS } from '../constants';

jest.mock('../modules/fetchAPI');
jest.mock('../modules/ListItems');

describe('Should to list the sequence items in app', () => {
  it('Should request toFetchAPI for get list items by API', () => {
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

  it('Should request list of items', () => {
    const testToListItems = jest.fn();
    testToListItems.mockImplementation(() => toListItems());

    // do
    testToListItems();

    // then
    expect(testToListItems).toHaveReturned();
    expect(testToListItems).toHaveBeenCalledTimes(1);

    // Expects fidelity with scope of function
    expect(testToListItems).toMatchSnapshot();
  });
});
