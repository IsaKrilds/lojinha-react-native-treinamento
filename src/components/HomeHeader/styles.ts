import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  width: 100%;
  height: ${theme.spacing(10)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const RightContainer = styled.View`
  width: 36%;
  height: ${theme.spacing(10)}px;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const LeftContainer = styled.View`
  width: 65%;
  height: ${theme.spacing(10)}px;
  align-items: flex-start;
  justify-content: center;
`;

export const StyledLogoSquare = styled.View`
  width: ${theme.spacing(7)}px;
  height: ${theme.spacing(7)}px;
  border-radius: ${theme.spacing(2.5)}px;
  border-top-left-radius: 0px;
  background-color: ${theme.colors.white};
  justify-content: center;
  align-items: center;
  margin-left: ${theme.spacing(2)}px;
`;
