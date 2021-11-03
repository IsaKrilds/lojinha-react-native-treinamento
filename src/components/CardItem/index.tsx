import React, {useContext} from 'react';
import {
  CardContainer,
  DescriptionContainer,
  StyledTitle,
  StyledSubTitle,
  IconContainer,
} from './styles';
import {TouchableOpacity} from 'react-native';

import {theme} from '../../styles/theme';
import {CartContext} from '../../contexts/CartContext';

import Icon from 'react-native-vector-icons/AntDesign';
import ProductImage from '../ProductImage';

interface Props {
  name: string;
  categoryName: string;
  id: number;
  price: number;
}

const CardItem: React.FC<Props> = ({name, categoryName, id, price}) => {
  const {addItemToCart} = useContext(CartContext);

  return (
    <CardContainer>
      <ProductImage id={id} />
      <DescriptionContainer>
        <StyledTitle>{name}</StyledTitle>
        <StyledSubTitle>{categoryName}</StyledSubTitle>
        <StyledSubTitle>R$ {price.toFixed(2)}</StyledSubTitle>
      </DescriptionContainer>
      <IconContainer>
        <TouchableOpacity
          onPress={() => addItemToCart(name, price, id, categoryName)}
          testID={`add-item-${id}`}>
          <Icon name="plus" size={25} color={theme.colors.darkGrey} />
        </TouchableOpacity>
      </IconContainer>
    </CardContainer>
  );
};

export default CardItem;
