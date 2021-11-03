import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  height: ${theme.spacing(11)}px;
  width: 100%;
`;

export const InputTextContainer = styled.View`
  width: 100%;
  height: ${theme.spacing(8)}px;
  background-color: ${theme.colors.white};
  padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  border-radius: ${theme.spacing(2)}px;
  border-top-right-radius: 0px;
  shadow-color: #ccc9c9;
  shadow-offset: {width: 0, height: 0};
  shadow-opacity: 0.4;
  shadow-radius: 14.0;
  elevation: 10;
`;

export const DarkColorText = styled.Text`
  color: ${theme.colors.darkGrey};
`;

export const StyledInputText = styled.TextInput`
  width: 90%;
  height: ${theme.spacing(4)}px;
  margin: 0;
  padding: 0;
  color: #a5a5a5;
`;

export const StyledErrorText = styled.Text`
  color: ${theme.colors.lightGrey};
  margin-left: ${theme.spacing(1)}px;
`;
