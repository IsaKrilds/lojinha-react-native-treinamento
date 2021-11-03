import React, {useEffect, useState} from 'react';
import {BackgroundView, StyledFlatList, StyledText} from './styles';

import {useOrders} from '../../hooks/useOrders';

import OrderCard from '../../components/OrderCard';
import HomeHeader from '../../components/HomeHeader';
import StyledActivityIndicator from '../../components/StyledActivityIndicator';

const Orders: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [listLoading, setListLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  const {getAll} = useOrders();

  const fetchOrders = () => {
    setListLoading(true);
    getAll()
      .then(({data}) => {
        setOrders(data);
      })
      .finally(() => {
        setLoading(false);
        setListLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <StyledActivityIndicator />;
  }

  return (
    <BackgroundView>
      <HomeHeader />
      {orders!.length > 0 ? (
        <>
          <StyledFlatList
            initialNumToRender={20}
            testID="flat-list"
            keyExtractor={item => `${item.id}`}
            data={orders}
            renderItem={({item}) => <OrderCard key={item.id} {...item} />}
            onRefresh={fetchOrders}
            refreshing={listLoading}
          />
        </>
      ) : (
        <StyledText>Nenhum pedido realizado</StyledText>
      )}
    </BackgroundView>
  );
};

export default Orders;
