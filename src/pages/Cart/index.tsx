import React, {useContext, useState} from 'react';
import {StyledFlatList, BackgroundView, StyledText} from './styles';

import {CartContext} from '../../contexts/CartContext';
import {useCart} from '../../hooks/useCart';

import StyledActivityIndicator from '../../components/StyledActivityIndicator';
import HomeHeader from '../../components/HomeHeader';
import CartFooter from '../../components/CartFooter';
import CartCardItem from '../../components/CartCardItem';
import CartModal from '../../components/CartModal';

const Cart: React.FC = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const {products, clearCart} = useContext(CartContext);
  const {makePurchase} = useCart();

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    clearCart();
    navigation.navigate('Home');
  };

  const handleSubmit = async () => {
    setLoading(true);
    const response = await makePurchase(products);
    if (response.success) {
      setLoading(false);
      showModal();
    } else if (!response.success) {
      setLoading(false);
      console.log(response.error);
    }
  };

  if (loading) {
    return <StyledActivityIndicator />;
  }

  return (
    <>
      <BackgroundView>
        <HomeHeader />
        {products!.length > 0 ? (
          <>
            <StyledFlatList
              initialNumToRender={20}
              testID="flat-list"
              keyExtractor={item => `${item.id}`}
              data={products}
              renderItem={({item}) => (
                <CartCardItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.value}
                  categoryName={item.category.name}
                  amount={item.amount}
                />
              )}
            />
            <CartFooter handleSubmit={handleSubmit} />
          </>
        ) : (
          <StyledText>Nenhum item no carrinho</StyledText>
        )}
        <CartModal visible={visible} hideModal={hideModal} />
      </BackgroundView>
    </>
  );
};

export default Cart;
