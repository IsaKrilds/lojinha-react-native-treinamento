import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const CardContainer = styled.View`
  width: 90%;
  height: ${theme.spacing(12)}px;
  background-color: ${theme.colors.white};
  border-radius: ${theme.spacing(2)}px;
  align-items: center;
  flex-direction: row;
  padding: ${theme.spacing(1.5)}px;
  margin-bottom: ${theme.spacing(2)}px;
`;

export const DescriptionContainer = styled.View`
  height: 100%;
  width: 55%;
  border-radius: 8px;
  justify-content: center;
  padding-left: ${theme.spacing(1.5)}px;
`;

export const StyledTitle = styled.Text`
  color: ${theme.colors.darkGrey};
  font-size: ${theme.spacing(2.5)}px;
`;

export const StyledSubTitle = styled.Text`
  color: ${theme.colors.lightGrey};
  font-size: ${theme.spacing(2)}px;
`;

export const IconContainer = styled.View`
  height: 100%;
  width: 20%;
  justify-content: center;
  align-items: center;
`;

export const RowView = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const RemoveText = styled.Text`
  width: 100%;
  color: ${theme.colors.darkGrey};
  font-size: ${theme.spacing(2)}px;
  text-decoration: underline;
  justify-content: center;
  margin-top: ${theme.spacing(1)}px;
`;
