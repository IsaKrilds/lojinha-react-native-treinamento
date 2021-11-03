import React, {useContext} from 'react';
import {
  Container,
  StyledButton,
  StyledRow,
  TotalText,
  TextButton,
} from './styles';

import {CartContext} from '../../contexts/CartContext';

interface Props {
  handleSubmit(): void;
}

const CartFooter: React.FC<Props> = ({handleSubmit}) => {
  const {totalValue} = useContext(CartContext);

  return (
    <Container>
      <StyledRow>
        <TotalText>Total:</TotalText>
        <TotalText>R$ {totalValue.toFixed(2)}</TotalText>
      </StyledRow>
      <StyledButton onPress={() => handleSubmit()} testID="submit-purchase">
        <TextButton>Finalizar Pedido</TextButton>
      </StyledButton>
    </Container>
  );
};

export default CartFooter;
