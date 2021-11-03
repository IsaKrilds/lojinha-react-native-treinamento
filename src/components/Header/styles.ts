import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: ${theme.spacing(10)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.Text`
  color: ${theme.colors.black};
  font-size: ${theme.spacing(3)}px;
`;

export const TitleContainer = styled.View`
  width: 60%;
  height: ${theme.spacing(10)}px;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  padding-top: 5px;
  width: 20%;
  height: ${theme.spacing(10)}px;
  align-items: center;
  justify-content: center;
`;
