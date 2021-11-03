import 'react-native';
import React from 'react';
import Signup from '..';
import axios from '../../../config/axios';

import {render, fireEvent, waitFor} from '../../../utils/tests';

jest.mock('../../../config/axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('create user', () => {
  it('should create user successfully', async () => {
    const userData = {
      email: 'anyemail@gmail.com',
      password: '123456',
      username: 'any name',
      age: new Date(),
    };

    const {getByTestId} = render(<Signup />);

    fireEvent.changeText(getByTestId('username'), {
      target: {value: userData.username},
    });
    fireEvent.changeText(getByTestId('email'), {
      target: {value: userData.email},
    });
    fireEvent.changeText(getByTestId('password'), {
      target: {value: userData.password},
    });

    await waitFor(() => {
      fireEvent.press(getByTestId('submit-signup'));
    });

    expect(mockedAxios.post).toHaveBeenCalledWith(`/user`, {
      email: userData.email,
      password: userData.password,
      username: userData.username,
      age: 0,
    });
  });

  it('should show error if signup inputs are empty', async () => {
    const {getByTestId, getByText} = render(<Signup />);

    await waitFor(() => {
      fireEvent.press(getByTestId('submit-signup'));
    });

    await waitFor(() => {
      getByText('Por favor, insira um nome');
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
      username: 'any name',
      age: new Date(1999, 11, 29),
      email: 'anyemail.com',
      password: '1234',
    };

    const {getByTestId, getByText} = render(<Signup />);

    fireEvent.changeText(getByTestId('username'), {
      target: {value: userData.username},
    });

    fireEvent.changeText(getByTestId('email'), {
      target: {value: userData.email},
    });
    fireEvent.changeText(getByTestId('password'), {
      target: {value: userData.password},
    });

    await waitFor(() => {
      fireEvent.press(getByTestId('submit-signup'));
    });

    await waitFor(() => {
      getByText('Por favor, insira um email válido');
    });

    await waitFor(() => {
      getByText('O número mínimo de caractéres é de 6');
    });
  });
});
