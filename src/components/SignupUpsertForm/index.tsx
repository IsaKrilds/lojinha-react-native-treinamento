import React from 'react';

import {StyledButton, TextButton} from './styles';

import {Formik, FormikHelpers, FormikProps} from 'formik';
import {InitialValues, FormValues, validationSchema} from './utils';

import StyledTextInput from '../StyledTextInput';
import StyledDatePicker from '../StyleDateTimePicker';

const SignupUpsertForm: React.FC<{
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
            testID="username"
            name="username"
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            title="Nome"
          />
          <StyledDatePicker
            testID="age"
            name="age"
            value={values.age}
            onChangeDate={handleChange('age')}
            title="Data de Nascimento"
          />
          <StyledTextInput
            testID="email"
            name="email"
            title="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          <StyledTextInput
            testID="password"
            name="password"
            title="Senha"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry={true}
          />
          <StyledButton onPress={handleSubmit} testID="submit-signup">
            <TextButton>Cadastrar</TextButton>
          </StyledButton>
        </>
      )}
    </Formik>
  );
};

export default SignupUpsertForm;
