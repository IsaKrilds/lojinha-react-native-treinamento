import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const CardContainer = styled.View`
  flex: 7;
  justify-content: center;
  align-items: center;
  border-top-left-radius: ${theme.spacing(10)}px;
  overflow: hidden;
  background-color: ${theme.colors.white};
  padding: 0 10%;
`;

export const TitleContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.black};
  height: ${theme.spacing(8)}px;
  border-radius: ${theme.spacing(2)}px;
  border-top-right-radius: 0px;
  margin-top: ${theme.spacing(3)}px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.spacing(2.5)}px;
`;

export const LoginContainer = styled.View`
  margin-top: ${theme.spacing(5)}px;
`;

export const TitleText = styled.Text`
  font-size: ${theme.spacing(4)}px;
  color: ${theme.colors.white};
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
