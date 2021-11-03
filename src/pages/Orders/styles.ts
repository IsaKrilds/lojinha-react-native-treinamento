import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {FlatList} from 'react-native';

export const StyledFlatList = styled(FlatList as new () => FlatList<any>).attrs(
  {
    contentContainerStyle: {
      paddingVertical: theme.spacing(1),
      paddingHorizontal: theme.spacing(2),
    },
  },
)`
  flex: 1;
`;

export const BackgroundView = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${theme.colors.softWhite};
`;

export const StyledText = styled.Text`
  font-size: ${theme.spacing(2)}px;
  align-self: center;
`;
