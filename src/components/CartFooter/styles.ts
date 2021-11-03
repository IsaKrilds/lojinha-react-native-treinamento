import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  width: 90%;
  height: ${theme.spacing(14)}px;
  background-color: #fff;
  margin: ${theme.spacing(2)}px 0;
  align-self: center;
  border-radius: ${theme.spacing(2)}px;
  justify-content: space-around;
  align-items: center;
  padding: ${theme.spacing(1)}px ${theme.spacing(3)}px;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-size: ${theme.spacing(2.5)}px;
  font-weight: bold;
  color: ${theme.colors.darkGrey};
`;

export const TextButton = styled.Text`
  color: ${theme.colors.white};
  font-size: ${theme.spacing(2.3)}px;
`;

export const StyledButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.black};
  height: ${theme.spacing(6)}px;
  border-radius: ${theme.spacing(1.5)}px;
  border-top-right-radius: 0px;
  align-items: center;
  justify-content: center;
`;
