import axios from '../config/axios';
import {successObject, errorObject} from './utils';
import qs from 'qs';

const endpoint = '/product';

export interface ProductModel {
  amount: number;
  name: string;
  value: number;
  id: number;
  category: {
    name: string;
  };
}

export const useProducts = () => {
  const getAll = async (
    search?: string,
    page?: number,
    productIds?: Number[],
  ) => {
    try {
      const response = await axios.get(`${endpoint}`, {
        params: {
          name: search !== undefined ? `%${search}%` : search,
          limit: 7,
          page: page || 0,
          'amount[min]': 1,
          id: productIds,
        },
        paramsSerializer: params => {
          return qs.stringify(params, {arrayFormat: 'repeat'});
        },
      });
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  const getSpecificProducts = async (productIds?: Number[]) => {
    try {
      const response = await axios.get(`${endpoint}`, {
        params: {
          limit: productIds?.length,
          id: productIds,
        },
        paramsSerializer: params => {
          return qs.stringify(params, {arrayFormat: 'repeat'});
        },
      });
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  const getProductsImages = async (id: number) => {
    try {
      const response = await axios.get(`${endpoint}/${id}/image`);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  return {getAll, getProductsImages, getSpecificProducts};
};
