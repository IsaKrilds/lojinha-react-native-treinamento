import React from 'react';
import {
  render,
  fakeSuccessFetch,
  waitForElementToBeRemoved,
  fireEvent,
} from '../../../utils/tests';
import OrdersPage from '..';
import CartProvider from '../../../contexts/CartContext';
import axios from '../../../config/axios';

jest.mock('../../../config/axios');
jest.mock('../../../components/ProductImage');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Show Orders page', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should show message if there is no orders in list', async () => {
    mockedAxios.get.mockImplementationOnce(() => fakeSuccessFetch([]));

    const {getByTestId, getByText} = render(
      <CartProvider>
        <OrdersPage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(`/purchase/user`);

    getByText('Nenhum pedido realizado');
  });
  it('Should show all orders on screen', async () => {
    mockedAxios.get.mockImplementationOnce(() =>
      fakeSuccessFetch([
        {
          id: 1,
          products: [
            {
              id: 4,
              purchase_id: 11,
              product_id: 3,
              value: 100,
              amount: 1,
            },
          ],
        },
      ]),
    );

    const {getByTestId} = render(
      <CartProvider>
        <OrdersPage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(`/purchase/user`);

    getByTestId('order-item-1');
  });
  it('Should show all orders on screen and click it to expand and see more information', async () => {
    mockedAxios.get.mockImplementation(() =>
      fakeSuccessFetch([
        {
          id: 1,
          products: [
            {
              id: 4,
              name: 'any name 1',
              purchase_id: 11,
              product_id: 3,
              value: 100,
              amount: 1,
            },
            {
              id: 5,
              name: 'any name 2',
              purchase_id: 11,
              product_id: 4,
              value: 100,
              amount: 1,
            },
          ],
        },
      ]),
    );

    const {getByTestId} = render(
      <CartProvider>
        <OrdersPage />
      </CartProvider>,
    );

    await waitForElementToBeRemoved(() => getByTestId('activity-indicator'));

    expect(mockedAxios.get).toHaveBeenCalledWith(`/purchase/user`);

    getByTestId('order-item-1');

    await fireEvent.press(getByTestId('order-item-1'));

    getByTestId('total-value');
  });
});
