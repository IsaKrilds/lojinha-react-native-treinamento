import * as React from 'react';
import {StyledSnackBar} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  isVisible: boolean;
  message: string;
  handleClose: () => void;
}

const StyledSnackbar: React.FC<Props> = ({isVisible, message, handleClose}) => {
  return (
    <StyledSnackBar
      duration={3000}
      visible={isVisible}
      onDismiss={handleClose}
      action={{
        label: <Icon name="close" size={20} color="#FFF" />,
        onPress: () => {
          handleClose();
        },
      }}>
      {message}
    </StyledSnackBar>
  );
};

export default StyledSnackbar;
