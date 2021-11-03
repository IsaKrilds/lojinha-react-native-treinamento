import React from 'react';

import {
  StyledInputText,
  InputTextContainer,
  DarkColorText,
  Container,
  StyledErrorText,
} from './styles';

import {ErrorMessage} from 'formik';
import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  name: string;
  title: string;
}

const LoginForm: React.FC<Props> = ({children, title, name, ...rest}) => {
  return (
    <Container>
      <InputTextContainer>
        <DarkColorText>{title}</DarkColorText>
        <StyledInputText {...rest} />
      </InputTextContainer>
      <ErrorMessage name={name}>
        {msg => <StyledErrorText>{msg}</StyledErrorText>}
      </ErrorMessage>
    </Container>
  );
};

export default LoginForm;
