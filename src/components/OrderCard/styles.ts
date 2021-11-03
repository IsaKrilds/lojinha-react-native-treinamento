import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {List} from 'react-native-paper';

export const StyledList = styled(List.Accordion)`
  background-color: ${theme.colors.white};
  margin-top: ${theme.spacing(1)}px;
`;

export const StyledListItem = styled(List.Item)`
  background-color: ${theme.colors.white};
`;
