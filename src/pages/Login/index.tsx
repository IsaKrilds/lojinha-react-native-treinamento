import React, {useState, useContext} from 'react';
import {TouchableOpacity} from 'react-native';

import {
  Container,
  CardContainer,
  LogoContainer,
  DarkColorText,
  SignupContainer,
  TitleText,
  StyledLogoSquare,
  StyledScrollView,
} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';
import LoginForm from '../../components/LoginForm';

import StyledSnackbar from '../../components/StyledSnackbar';
import {FormValues} from '../../components/LoginForm/utils';
import {AuthContext} from '../../contexts/AuthContext';

const Login: React.FC = ({navigation}) => {
  const {signIn} = useContext(AuthContext);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (values: FormValues) => {
    const response = await signIn(values.email, values.password);
    if (response.success) {
      setIsVisible(true);
      setMessage('Usuário logado com sucesso!');
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
        <LogoContainer>
          <StyledLogoSquare>
            <Icon name="cloud" size={40} color="#111111" />
          </StyledLogoSquare>
        </LogoContainer>
        <StyledScrollView>
          <CardContainer>
            <TitleText>Login</TitleText>
            <LoginForm onSubmit={handleSubmit} />
            <SignupContainer>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <DarkColorText>
                  Ainda não tem uma conta? Cadastre-se
                </DarkColorText>
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

export default Login;
