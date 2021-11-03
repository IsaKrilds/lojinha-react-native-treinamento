import 'react-native';
import React from 'react';
import Login from '..';

import {render, fireEvent, waitFor} from '../../../utils/tests';
import {AuthContext} from '../../../contexts/AuthContext';
import {successObject} from '../../../hooks/utils';

describe('Make login', () => {
  it('should make a login successfully', async () => {
    const signIn = jest.fn(() => {
      return new Promise(resolve => resolve(successObject({success: true})));
    });

    const userData = {
      email: 'teste9@gmail.com',
      password: '123456',
    };

    const {getByTestId} = render(
      <AuthContext.Provider value={{signIn}}>
        <Login />
      </AuthContext.Provider>,
    );

    fireEvent.changeText(getByTestId('email'), {
      target: {value: userData.email},
    });
    fireEvent.changeText(getByTestId('password'), {
      target: {value: userData.password},
    });

    await waitFor(() => {
      fireEvent.press(getByTestId('submit-login'));
    });

    expect(signIn).toHaveBeenCalledWith(userData.email, userData.password);
  });

  it('should show error if email and password is empty', async () => {
    const {getByTestId, getByText} = render(<Login />);

    await waitFor(() => {
      fireEvent.press(getByTestId('submit-login'));
    });

    await waitFor(() => {
      getByText('Por favor, insira um email');
    });

    await waitFor(() => {
      getByText('Por favor, insira uma senha');
    });
  });

  it('should show error if email is invalid and password have less than 6 characters', async () => {
    const userData = {
      email: 'anyemail.com',
      password: '1234',
    };

    const {getByTestId, getByText} = render(<Login />);

    fireEvent.changeText(getByTestId('email'), {
      target: {value: userData.email},
    });
    fireEvent.changeText(getByTestId('password'), {
      target: {value: userData.password},
    });

    await waitFor(() => {
      fireEvent.press(getByTestId('submit-login'));
    });

    await waitFor(() => {
      getByText('Por favor, insira um email válido');
    });

    await waitFor(() => {
      getByText('O número mínimo de caractéres é de 6');
    });
  });
});
