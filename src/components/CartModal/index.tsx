import React, {useContext} from 'react';
import {
  StyledModal,
  StyledRow,
  StyledTitle,
  CloseIcon,
  BoldText,
  StyledText,
} from './styles';
import {TouchableOpacity} from 'react-native';

import {CartContext} from '../../contexts/CartContext';

interface Props {
  visible: boolean;
  hideModal(): void;
}

const CartModal: React.FC<Props> = ({visible, hideModal}) => {
  const {products, totalValue} = useContext(CartContext);

  return (
    <StyledModal visible={visible} onDismiss={hideModal}>
      <TouchableOpacity onPress={hideModal}>
        <CloseIcon />
      </TouchableOpacity>
      <StyledTitle>Resumo do Pedido</StyledTitle>
      {products.map(item => {
        const totalItem = item.value * item.amount;
        return (
          <StyledRow key={item.id}>
            <StyledText>
              {item.name} x{item.amount}
            </StyledText>
            <StyledText>R${totalItem.toFixed(2)}</StyledText>
          </StyledRow>
        );
      })}
      <StyledRow>
        <StyledText>Pagamento via:</StyledText>
        <StyledText>Saldo</StyledText>
      </StyledRow>
      <StyledRow>
        <BoldText>TOTAL:</BoldText>
        <BoldText>R$ {totalValue.toFixed(2)}</BoldText>
      </StyledRow>
    </StyledModal>
  );
};

export default CartModal;
