import React from 'react';
import {
  render,
  fakeSuccessFetch,
  waitForElementToBeRemoved,
  fireEvent,
} from '../../../utils/tests';
import HomePage from '..';
import axios from '../../../config/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartProvider from '../../../contexts/CartContext';
import {cartKey} from '../../../storageData';

jest.mock('../../../config/axios');
jest.mock('../../../components/ProductImage');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('Show home page', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should show all products on screen', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      fakeSuccessFetch({
        results: [
          {
            amount: 10,
            id: 1,
            name: 'Any product 1',
            value: 25,
            category: {
              name: 'Home Furnishings',
            },
          },
          {
            amount: 10,
            id: 2,
            name: 'Any product 2',
            value: 26,
            category: {
              name: 'Clothing',
            },
          },
          {
            amount: 10,
            id: 3,
            name: 'Any product 3',
            value: 27,
            category: {
              name: 'Electronics',
            },
          },
          {
            amount: 10,
            id: 4,
            name: 'Any product 4',
            value: 28,
            category: {
              name: 'Any',
            },
          },
        ],
        total: 5,
      }),
    );

    const {getByText, getByTestId} = render(
      <CartProvider>
        <HomePage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/product`,
      expect.objectContaining({
        params: {'amount[min]': 1, limit: 7, name: undefined, page: 0},
      }),
    );

    getByText('Any product 1');
    getByText('Home Furnishings');
    getByText('R$ 25.00');

    getByText('Any product 2');
    getByText('Clothing');
    getByText('R$ 26.00');

    getByText('Any product 3');
    getByText('Electronics');
    getByText('R$ 27.00');

    getByText('Any product 4');
    getByText('Any');
    getByText('R$ 28.00');
  });
  it('Should show all products on screen, scroll down to check pagination and make a search', async () => {
    const firstItems = [...new Array(7)].map((_, index) => {
      return {
        amount: 10,
        id: index + 1,
        name: `Any product ${index + 1}`,
        value: index + 1,
        category: {
          name: 'any',
        },
      };
    });

    const secondItems = [...new Array(7)].map((_, index) => {
      return {
        amount: 10,
        id: index + 8,
        name: `Any product ${index + 8}`,
        value: index + 8,
        category: {
          name: 'any',
        },
      };
    });

    mockedAxios.get
      .mockImplementationOnce(() =>
        fakeSuccessFetch({
          results: firstItems,
          total: 14,
        }),
      )
      .mockImplementationOnce(() =>
        fakeSuccessFetch({
          results: secondItems,
          total: 14,
        }),
      );

    const eventData = {
      nativeEvent: {
        contentOffset: {
          y: 300,
        },
        contentSize: {
          // Dimensions of the scrollable content
          height: 300,
          width: 100,
        },
        layoutMeasurement: {
          // Dimensions of the device
          height: 100,
          width: 100,
        },
      },
    };

    const {getByText, getByTestId} = render(
      <CartProvider>
        <HomePage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/product`,
      expect.objectContaining({
        params: {'amount[min]': 1, limit: 7, name: undefined, page: 0},
      }),
    );

    getByText('Any product 1');
    getByText('R$ 1.00');

    getByText('Any product 2');
    getByText('R$ 2.00');

    getByText('Any product 3');
    getByText('R$ 3.00');

    getByText('Any product 4');
    getByText('R$ 4.00');

    getByText('Any product 5');
    getByText('R$ 5.00');

    getByText('Any product 6');
    getByText('R$ 6.00');

    getByText('Any product 7');
    getByText('R$ 7.00');

    fireEvent.scroll(getByTestId('flat-list'), eventData);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/product`,
      expect.objectContaining({
        params: {'amount[min]': 1, limit: 7, name: undefined, page: 0},
      }),
    );

    await waitForElementToBeRemoved(() => getByTestId('list-loading'));

    getByText('Any product 8');
    getByText('R$ 8.00');

    getByText('Any product 9');
    getByText('R$ 9.00');

    getByText('Any product 10');
    getByText('R$ 10.00');

    getByText('Any product 11');
    getByText('R$ 11.00');

    getByText('Any product 12');
    getByText('R$ 12.00');

    getByText('Any product 13');
    getByText('R$ 13.00');

    getByText('Any product 14');
    getByText('R$ 14.00');

    fireEvent.changeText(getByTestId('search-input'), {
      target: {value: 'Any product 1'},
    });
    fireEvent.press(getByTestId('search-submit'));

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    getByText('Any product 1');
    getByText('R$ 1.00');
  });
  it('should check if item where added in cart', async () => {
    const Item = {
      amount: 10,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };

    mockedAxios.get.mockImplementationOnce(() =>
      fakeSuccessFetch({
        results: [Item],
        total: 4,
      }),
    );

    const {getByTestId} = render(
      <CartProvider>
        <HomePage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/product`,
      expect.objectContaining({
        params: {'amount[min]': 1, limit: 7, name: undefined, page: 0},
      }),
    );

    fireEvent.press(getByTestId('add-item-1'));

    expect(mockedAsyncStorage.setItem).toBeCalledWith(
      cartKey,
      JSON.stringify([{...Item, amount: 1}]),
    );
  });

  it('should check if when clicked twice to add to cart in the same product it should add amount plus 1', async () => {
    const Item = {
      amount: 10,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };

    mockedAxios.get.mockImplementationOnce(() =>
      fakeSuccessFetch({
        results: [Item],
        total: 4,
      }),
    );

    const {getByTestId} = render(
      <CartProvider>
        <HomePage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `/product`,
      expect.objectContaining({
        params: {'amount[min]': 1, limit: 7, name: undefined, page: 0},
      }),
    );

    fireEvent.press(getByTestId('add-item-1'));
    fireEvent.press(getByTestId('add-item-1'));

    expect(mockedAsyncStorage.setItem).toBeCalledWith(
      cartKey,
      JSON.stringify([{...Item, amount: 2}]),
    );
  });
});
