import React from 'react';
import {Container} from './styles';
import {theme} from '../../styles/theme';

import {ActivityIndicator} from 'react-native';

const StyledActivityIndicator: React.FC = () => {
  return (
    <Container testID="activity-indicator">
      <ActivityIndicator size="large" color={theme.colors.darkGrey} />
    </Container>
  );
};

export default StyledActivityIndicator;
