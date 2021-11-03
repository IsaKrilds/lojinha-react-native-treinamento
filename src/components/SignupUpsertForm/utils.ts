import * as Yup from 'yup';
import {calculateAge} from '../../utils/index';

export const InitialValues = {
  email: '',
  password: '',
  username: '',
  age: new Date(),
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, insira um email válido')
    .required('Por favor, insira um email'),
  username: Yup.string().required('Por favor, insira um nome'),
  age: Yup.string().required('Por favor, insira uma data de nacimento'),
  password: Yup.string()
    .min(6, 'O número mínimo de caractéres é de 6')
    .required('Por favor, insira uma senha'),
});

export interface FormValues {
  email: string;
  password: string;
  username: string;
  age: any;
}

export const formDataToSignUpModel = (values: FormValues) => {
  return {
    username: values.username,
    age: calculateAge(values.age),
    email: values.email,
    password: values.password,
  } as FormValues;
};
