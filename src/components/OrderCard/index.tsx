import React, {useState, useEffect} from 'react';
import {StyledList, StyledListItem} from './styles';
import {Text} from 'react-native';

import {List} from 'react-native-paper';
import {theme} from '../../styles/theme';
import {useProducts, ProductModel} from '../../hooks/useProducts';

import ProductImage from '../ProductImage';

interface OrdersProductsModel {
  // eslint-disable-next-line
  purchase_id: number;
  // eslint-disable-next-line
  product_id: number;
  id: number;
  value: number;
  amount: number;
  name?: string;
}

interface Props {
  id: number;
  products: OrdersProductsModel[];
}

const CartCardItem: React.FC<Props> = ({id, products}) => {
  const [productInfo, setProductInfo] = useState<OrdersProductsModel[]>([]);
  const [expanded, setExpanded] = useState(false);
  const handlePress = () => setExpanded(!expanded);

  const {getSpecificProducts} = useProducts();

  useEffect(() => {
    const productIds = products.map(item => {
      return item.product_id;
    });

    getSpecificProducts(productIds).then(({data}) => {
      setProductInfo(
        products.map(item => {
          const productWithName = data.results.find(
            (product: ProductModel) => product.id === item.product_id,
          );

          return {
            ...item,
            name: productWithName.name,
          };
        }),
      );
    });
  }, []);

  const total = productInfo.reduce((acc, item) => {
    acc += item.value * item.amount;
    return acc;
  }, 0);

  return (
    <StyledList
      testID={`order-item-${id}`}
      title={`Pedido nº ${id}`}
      left={props => <List.Icon {...props} icon="equal" />}
      expanded={expanded}
      onPress={handlePress}
      style={{
        backgroundColor: theme.colors.white,
        marginTop: theme.spacing(1),
      }}>
      {productInfo.map(item => (
        <StyledListItem
          testID={`product-card-${item.product_id}`}
          key={item.id}
          left={() => <ProductImage id={item.product_id} />}
          right={() => <Text>R$ {item.value.toFixed(2)}</Text>}
          title={`${item.name}`}
        />
      ))}
      <StyledListItem
        testID={`total-value`}
        right={() => <Text>R$ {total.toFixed(2)}</Text>}
        title="Total"
      />
    </StyledList>
  );
};

export default CartCardItem;
