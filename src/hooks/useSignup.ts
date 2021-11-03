import axios from '../config/axios';
import {successObject, errorObject} from './utils';

const endpoint = '/user';

export const useSignUp = () => {
  const createUser = async (body: any) => {
    try {
      const response = await axios.post(`${endpoint}`, body);
      return successObject(response);
    } catch (error) {
      return errorObject(error);
    }
  };
  return {createUser};
};
