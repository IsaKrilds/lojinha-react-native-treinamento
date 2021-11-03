import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {Modal} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';

export const StyledModal = styled(Modal).attrs({
  contentContainerStyle: {
    backgroundColor: 'white',
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
})`
  background-color: #00000095;
`;

export const StyledRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${theme.spacing(1)}px;
`;

export const StyledTitle = styled.Text`
  align-self: center;
  font-size: 25px;
  color: ${theme.colors.darkGrey};
  margin-bottom: ${theme.spacing(1)}px;
`;

export const CloseIcon = styled(Icon).attrs({
  color: theme.colors.darkGrey,
  name: 'close',
  size: 20,
})`
  align-self: flex-end;
`;

export const BoldText = styled.Text`
  color: ${theme.colors.darkGrey};
  font-size: ${theme.spacing(2.3)};
  font-weight: bold;
`;

export const StyledText = styled.Text`
  color: ${theme.colors.darkGrey};
  font-size: ${theme.spacing(1.7)};
`;
