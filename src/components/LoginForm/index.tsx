import React from 'react';

import {StyledButton, TextButton} from './styles';

import {Formik, FormikHelpers, FormikProps} from 'formik';
import {InitialValues, FormValues, validationSchema} from './utils';

import StyledTextInput from '../StyledTextInput';

const LoginForm: React.FC<{
  innerRef?: React.Ref<FormikProps<FormValues>>;
  onSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void | Promise<void>;
}> = ({onSubmit, innerRef}) => {
  return (
    <Formik
      initialValues={InitialValues as FormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      innerRef={innerRef}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <>
          <StyledTextInput
            name="email"
            title="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            testID="email"
            keyboardType="email-address"
          />
          <StyledTextInput
            name="password"
            title="Senha"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
            testID="password"
          />
          <StyledButton onPress={handleSubmit} testID="submit-login">
            <TextButton>Login</TextButton>
          </StyledButton>
        </>
      )}
    </Formik>
  );
};

export default LoginForm;
