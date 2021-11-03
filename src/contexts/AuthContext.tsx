import React, {useState, useEffect} from 'react';
import axios from '../config/axios';
import {AxiosError} from 'axios';
import {storeData, getData, removeData, tokenKey} from '../storageData/index';
import {successObject, errorObject} from '../hooks/utils';
import StyledActivityIndicator from '../components/StyledActivityIndicator';
export interface ContextProps {
  token?: string;
  signIn(email: string, password: string): Promise<any>;
  signOut?(): void;
  error?: AxiosError;
}

export const AuthContext = React.createContext({} as ContextProps);

const AuthProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState('');
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  useEffect(() => {
    getData(tokenKey)
      .then(data => {
        setToken(data);
        axios.defaults.headers.authorization = data.token;
      })
      .finally(() => setLoading(false));
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post('/user/login', {
        email,
        password,
      });
      await storeData(tokenKey, {token: response.headers.authorization});
      axios.defaults.headers.authorization = response.headers.authorization;
      setToken(response.headers.authorization);
      setError(undefined);
      return successObject(response);
    } catch (err) {
      setError(err);
      return errorObject(err);
    }
  };

  const signOut = async () => {
    removeData(tokenKey);
    setToken('');
  };

  if (loading) {
    return <StyledActivityIndicator />;
  }

  return (
    <AuthContext.Provider
      value={{
        token,
        signIn,
        signOut,
        error,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
