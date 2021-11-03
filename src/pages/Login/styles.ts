import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const CardContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${theme.spacing(6)}px;
  padding: 0 10%;
`;

export const StyledScrollView = styled.ScrollView`
  flex: 3;
  border-top-left-radius: ${theme.spacing(10)}px;
  background-color: ${theme.colors.white};
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.ImageBackground`
  flex: 1;
`;

export const DarkColorText = styled.Text`
  color: #161616;
`;

export const SignupContainer = styled.View`
  margin-top: ${theme.spacing(5)}px;
`;

export const TitleText = styled.Text`
  font-size: ${theme.spacing(4)}px;
  margin-bottom: ${theme.spacing(3)}px;
`;

export const StyledLogoSquare = styled.View`
  width: ${theme.spacing(10)}px;
  height: ${theme.spacing(10)}px;
  border-radius: ${theme.spacing(3)}px;
  border-top-right-radius: 0px;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
`;
