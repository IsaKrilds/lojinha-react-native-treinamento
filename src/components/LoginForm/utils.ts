import * as Yup from 'yup';

export const InitialValues = {
  email: '',
  password: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, insira um email válido')
    .required('Por favor, insira um email'),
  password: Yup.string()
    .min(6, 'O número mínimo de caractéres é de 6')
    .required('Por favor, insira uma senha'),
});

export interface FormValues {
  email: string;
  password: string;
}
