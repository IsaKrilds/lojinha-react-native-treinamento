import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {Snackbar} from 'react-native-paper';

export const StyledSnackBar = styled(Snackbar)`
  background-color: ${theme.colors.darkGrey};
`;
