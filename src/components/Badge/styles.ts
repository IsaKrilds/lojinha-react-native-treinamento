import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const StyledView = styled.View`
  background-color: ${theme.colors.darkGrey};
  border-radius: ${theme.spacing(10)}px;
  width: ${theme.spacing(2)}px;
  height: ${theme.spacing(2)}px;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: -${theme.spacing(1)}px;
  top: -${theme.spacing(1)}px;
`;

export const StyledText = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.spacing(1)}px;
  font-weight: bold;
`;
