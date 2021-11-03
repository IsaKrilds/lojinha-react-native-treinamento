import React, {useContext} from 'react';
import {
  Container,
  RightContainer,
  LeftContainer,
  StyledLogoSquare,
} from './styles';

import {TouchableOpacity} from 'react-native';
import {theme} from '../../styles/theme';

import {AuthContext} from '../../contexts/AuthContext';
import {CartContext} from '../../contexts/CartContext';
import {useNavigation} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import Badge from '../Badge';

const HomeHeader: React.FC = () => {
  const {signOut} = useContext(AuthContext);
  const {products} = useContext(CartContext);
  const navigation = useNavigation();

  return (
    <Container>
      <LeftContainer>
        <StyledLogoSquare>
          <Icon name="cloud" size={30} color={theme.colors.darkGrey} />
        </StyledLogoSquare>
      </LeftContainer>
      <RightContainer>
        <TouchableOpacity
          testID="cart-icon"
          onPress={() => navigation.navigate('Carrinho')}>
          <Badge numberSize={products!.length} />
          <Icon name="cart-outline" size={25} color={theme.colors.darkGrey} />
        </TouchableOpacity>
        <TouchableOpacity onPress={signOut}>
          <Icon
            name="log-out-outline"
            size={25}
            color={theme.colors.darkGrey}
          />
        </TouchableOpacity>
      </RightContainer>
    </Container>
  );
};

export default HomeHeader;
