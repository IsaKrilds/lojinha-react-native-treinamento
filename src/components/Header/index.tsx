import React, {useContext} from 'react';
import {Container, StyledTitle, IconContainer, TitleContainer} from './styles';

import {TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts/AuthContext';
import {theme} from '../../styles/theme';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  title?: string;
  goBack?: () => void;
}
const Header: React.FC<Props> = ({title, goBack}) => {
  const {signOut} = useContext(AuthContext);

  return (
    <Container>
      <IconContainer>
        {goBack ? (
          <Icon
            name="md-arrow-back-outline"
            size={25}
            color={theme.colors.darkGrey}
          />
        ) : null}
      </IconContainer>
      <TitleContainer>
        <StyledTitle>{title}</StyledTitle>
      </TitleContainer>
      <IconContainer>
        <TouchableOpacity onPress={signOut}>
          <Icon
            name="log-out-outline"
            size={25}
            color={theme.colors.darkGrey}
          />
        </TouchableOpacity>
      </IconContainer>
    </Container>
  );
};

export default Header;
