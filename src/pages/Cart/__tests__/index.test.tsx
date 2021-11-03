import React from 'react';
import {render, fireEvent, waitFor} from '../../../utils/tests';
import CartPage from '..';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../../config/axios';
import CartProvider from '../../../contexts/CartContext';
import {cartKey} from '../../../storageData';

jest.mock('../../../config/axios');
jest.mock('../../../components/ProductImage');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAsyncStorage = AsyncStorage as jest.Mocked<typeof AsyncStorage>;

describe('Show Cart page', () => {
  it('Should show all products on screen', async () => {
    const item = {
      amount: 1,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([item]));

    const {getByTestId} = render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    await waitFor(() => getByTestId('cart-item-1'));

    fireEvent.press(getByTestId('submit-purchase'));

    expect(mockedAxios.post).toHaveBeenCalledWith(`/purchase`, {
      products: [{amount: 1, product_id: 1}],
    });
  });
  it('should show message if cart is empty', async () => {
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([]));

    const {getByText} = render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    await waitFor(() => getByText('Nenhum item no carrinho'));
  });
  it('Should show all products on screen and increase the amount in one product', async () => {
    const item = {
      amount: 1,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([item]));

    const {getByTestId} = render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    await waitFor(() => getByTestId('cart-item-1'));

    fireEvent.press(getByTestId('increase-1'));
    expect(mockedAsyncStorage.setItem).toBeCalledWith(
      cartKey,
      JSON.stringify([{...item, amount: 2}]),
    );
  });
  it('Should show all products on screen and decrease the amount in one product', async () => {
    const item = {
      amount: 2,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([item]));

    const {getByTestId} = render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    await waitFor(() => getByTestId('cart-item-1'));

    fireEvent.press(getByTestId('decrease-1'));
    expect(mockedAsyncStorage.setItem).toBeCalledWith(
      cartKey,
      JSON.stringify([{...item, amount: 1}]),
    );
  });
  it('Should show all products on screen and remove one product', async () => {
    const item = {
      amount: 1,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([item]));

    const {getByTestId} = render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    await waitFor(() => getByTestId('cart-item-1'));

    fireEvent.press(getByTestId('remove-1'));
    expect(mockedAsyncStorage.setItem).toBeCalledWith(
      cartKey,
      JSON.stringify([]),
    );
  });
  it('Should show all products on screen and decrease when amount is equal to 1, it shoud remove the product', async () => {
    const item = {
      amount: 1,
      id: 1,
      name: 'Any product 1',
      value: 25,
      category: {
        name: 'Home Furnishings',
      },
    };
    mockedAsyncStorage.getItem.mockResolvedValueOnce(JSON.stringify([item]));

    const {getByTestId} = render(
      <CartProvider>
        <CartPage />
      </CartProvider>,
    );

    await waitFor(() => getByTestId('cart-item-1'));

    fireEvent.press(getByTestId('decrease-1'));
    expect(mockedAsyncStorage.setItem).toBeCalledWith(
      cartKey,
      JSON.stringify([]),
    );
  });
});
