import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

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
