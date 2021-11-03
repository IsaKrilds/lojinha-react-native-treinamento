import React, {useState, useEffect} from 'react';
import {storeData, getData, cartKey} from '../storageData/index';
import StyledActivityIndicator from '../components/StyledActivityIndicator';
import {ProductModel} from '../hooks/useProducts';

export interface ContextProps {
  products: ProductModel[];
  totalValue: number;
  addItemToCart(
    name: string,
    price: number,
    id: number,
    categoryName: string,
  ): Promise<any>;
  removeItemInCart(id: number): void;
  increaseAmount(id: number): void;
  decreaseAmount(id: number): void;
  clearCart(): void;
}

export const CartContext = React.createContext({} as ContextProps);

const CartProvider: React.FC = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<ProductModel[]>([]);

  useEffect(() => {
    getData(cartKey)
      .then(data => {
        data && setCart(data);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!loading) {
      storeData(cartKey, [...cart]);
    }
  }, [cart]);

  const removeItemInCart = (id: number) => {
    const products = cart.filter((item: ProductModel) => item.id !== id);
    setCart(products);
  };

  const increaseAmount = (id: number) => {
    const products = cart.map((item: ProductModel) =>
      item.id === id ? {...item, amount: item.amount + 1} : item,
    );
    setCart(products);
  };

  const decreaseAmount = (id: number) => {
    const isLastItem = cart.some(item => item.id === id && item.amount === 1);
    if (isLastItem) {
      return removeItemInCart(id);
    }

    const products = cart.map((item: ProductModel) => {
      if (item.id === id) {
        return {...item, amount: item.amount - 1};
      } else {
        return item;
      }
    });
    setCart(products);
  };

  const addItemToCart = async (
    name: string,
    price: number,
    id: number,
    categoryName: string,
  ) => {
    const repeatItem = cart.some(item => item.id === id);
    if (repeatItem) {
      return increaseAmount(id);
    }

    setCart([
      ...cart,
      {
        amount: 1,
        id: id,
        name: name,
        value: price,
        category: {name: categoryName},
      },
    ]);
  };

  const total = cart.reduce((acc, item) => {
    acc += item.value * item.amount;
    return acc;
  }, 0);

  const clearCart = () => {
    setCart([]);
  };

  if (loading) {
    return <StyledActivityIndicator />;
  }

  return (
    <CartContext.Provider
      value={{
        totalValue: total,
        products: cart,
        addItemToCart,
        removeItemInCart,
        increaseAmount,
        decreaseAmount,
        clearCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
