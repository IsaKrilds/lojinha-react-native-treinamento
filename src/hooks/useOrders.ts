import axios from '../config/axios';
import {successObject, errorObject} from './utils';

const endpoint = '/purchase/user';

export const useOrders = () => {
  const getAll = async () => {
    try {
      const response = await axios.get(`${endpoint}`);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };

  return {getAll};
};
