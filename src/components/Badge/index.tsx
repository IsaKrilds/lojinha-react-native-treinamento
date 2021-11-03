import React from 'react';

import {StyledView, StyledText} from './styles';

interface Props {
  numberSize: number;
}

const Badge: React.FC<Props> = ({numberSize}) => {
  return (
    <StyledView>
      <StyledText>{numberSize}</StyledText>
    </StyledView>
  );
};

export default Badge;
