import axios from '../config/axios';
import {successObject, errorObject} from './utils';
import {ProductModel} from './useProducts';

const endpoint = '/purchase';

export const useCart = () => {
  const makePurchase = async (products: ProductModel[]) => {
    const cartProducts = products.map(item => {
      return {product_id: item.id, amount: item.amount};
    });

    try {
      const response = await axios.post(`${endpoint}`, {
        products: cartProducts,
      });
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  return {makePurchase};
};
