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

export const StyledSearchInput = styled.TextInput`
  width: 80%;
  height: 100%;
`;

export const StyledText = styled.Text`
  font-size: ${theme.spacing(2)}px;
  align-self: center;
`;
