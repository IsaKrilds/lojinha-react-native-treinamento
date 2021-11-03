import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  CardContainer,
  DarkColorText,
  SignupContainer,
  TitleText,
  TitleContainer,
  StyledScrollView,
} from './styles';

import {
  formDataToSignUpModel,
  FormValues,
} from '../../components/SignupUpsertForm/utils';
import {useSignUp} from '../../hooks/useSignup';
import {AuthContext} from '../../contexts/AuthContext';

import StyledSnackbar from '../../components/StyledSnackbar';
import SignupUpsertForm from '../../components/SignupUpsertForm';

const Signup: React.FC = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const {createUser} = useSignUp();

  const handleLogin = async (values: FormValues) => {
    await signIn(values.email, values.password);
  };

  const handleSubmit = async (values: FormValues) => {
    const response = await createUser(formDataToSignUpModel(values));
    if (response.success) {
      setIsVisible(true);
      setMessage('Usuário criado com sucesso!');
      handleLogin(values);
    } else if (!response.success) {
      setIsVisible(true);
      setMessage(response.error);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      <Container source={require('../../assets/images/background.jpg')}>
        <TitleContainer>
          <TitleText>Cadastro</TitleText>
        </TitleContainer>
        <StyledScrollView>
          <CardContainer>
            <SignupUpsertForm onSubmit={handleSubmit} />
            <SignupContainer>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <DarkColorText>Já tem uma conta? Venha logar</DarkColorText>
              </TouchableOpacity>
            </SignupContainer>
          </CardContainer>
        </StyledScrollView>
      </Container>
      <StyledSnackbar
        isVisible={isVisible}
        message={message}
        handleClose={handleClose}
      />
    </>
  );
};

export default Signup;
