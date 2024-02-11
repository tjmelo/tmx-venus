import toFetchAPI from '../modules/fetchAPI';
import { KEYS } from '../constants';

const mockPostData = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: 'some data',
};

jest.mock('../modules/fetchAPI');

describe('Should to call fetch API for render data', () => {
  it('Should fetch API data', async () => {
    const testToFetchAPI = jest.fn();
    testToFetchAPI.mockImplementation((argTest) => toFetchAPI(argTest));

    // do
    testToFetchAPI(KEYS.API, mockPostData);
    testToFetchAPI(KEYS.API);

    // then
    expect(testToFetchAPI).toHaveReturned();
    expect(testToFetchAPI).toHaveBeenCalledWith(KEYS.API);
    expect(testToFetchAPI).toHaveBeenCalledWith(KEYS.API, mockPostData);

    expect(testToFetchAPI).toHaveBeenCalledTimes(2);

    // Expects fidelity with scope of function
    expect(testToFetchAPI).toMatchSnapshot();
  });
});
