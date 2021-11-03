import React, {useContext} from 'react';
import {
  CardContainer,
  DescriptionContainer,
  StyledTitle,
  StyledSubTitle,
  IconContainer,
  RowView,
  RemoveText,
} from './styles';
import {TouchableOpacity, Text} from 'react-native';

import {CartContext} from '../../contexts/CartContext';

import {theme} from '../../styles/theme';
import Icon from 'react-native-vector-icons/AntDesign';
import ProductImage from '../ProductImage';

interface Props {
  name?: string;
  categoryName?: string;
  id: number;
  price: number;
  amount: number;
}

const CartCardItem: React.FC<Props> = ({
  name,
  categoryName,
  id,
  price,
  amount,
}) => {
  const {removeItemInCart, increaseAmount, decreaseAmount} = useContext(
    CartContext,
  );

  return (
    <CardContainer testID={`cart-item-${id}`}>
      <ProductImage id={id} />
      <DescriptionContainer>
        <StyledTitle>{name}</StyledTitle>
        <StyledSubTitle>{categoryName}</StyledSubTitle>
        <StyledSubTitle>R$ {price.toFixed(2)}</StyledSubTitle>
      </DescriptionContainer>
      <IconContainer>
        <RowView>
          <TouchableOpacity
            onPress={() => decreaseAmount(id)}
            testID={`decrease-${id}`}>
            <Icon name="minuscircleo" size={20} color={theme.colors.darkGrey} />
          </TouchableOpacity>
          <Text>{amount}</Text>
          <TouchableOpacity
            onPress={() => increaseAmount(id)}
            testID={`increase-${id}`}>
            <Icon name="pluscircleo" size={20} color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </RowView>
        <TouchableOpacity
          onPress={() => removeItemInCart(id)}
          testID={`remove-${id}`}>
          <RemoveText>Remover</RemoveText>
        </TouchableOpacity>
      </IconContainer>
    </CardContainer>
  );
};

export default CartCardItem;
