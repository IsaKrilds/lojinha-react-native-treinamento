import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {ProductModel} from '../../hooks/useProducts';
import {FlatList} from 'react-native';

export const StyledFlatList = styled(
  FlatList as new () => FlatList<ProductModel>,
).attrs({
  contentContainerStyle: {alignItems: 'center', justifyContent: 'center'},
})`
  flex: 1;
`;

export const BackgroundView = styled.View`
  flex: 1;
  background-color: ${theme.colors.softWhite};
`;

export const InputBox = styled.View`
  width: 90%;
  background-color: ${theme.colors.white};
  height: ${theme.spacing(5)}px;
  border-radius: ${theme.spacing(1)}px;
  padding: 0 ${theme.spacing(2)}px;
  align-self: center;
  margin-bottom: ${theme.spacing(2)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StyledSearchInput = styled.TextInput`
  width: 80%;
  height: 100%;
  color: ${theme.colors.darkGrey};
`;
