import React, {useState, useEffect} from 'react';
import {
  StyledFlatList,
  BackgroundView,
  StyledSearchInput,
  InputBox,
} from './styles';
import {TouchableOpacity, ActivityIndicator} from 'react-native';

import {useProducts} from '../../hooks/useProducts';

import StyledActivityIndicator from '../../components/StyledActivityIndicator';
import HomeHeader from '../../components/HomeHeader';
import CardItem from '../../components/CardItem';
import Icon from 'react-native-vector-icons/Ionicons';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [itemName, setItemName] = useState('');
  const [searchText, setSearchText] = useState<string | undefined>();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [limitLoading, setLimitLoading] = useState(false);

  const {getAll} = useProducts();

  useEffect(() => {
    getAll(searchText, page)
      .then(({data}) => {
        setTotal(data.total);
        setProducts(page === 0 ? data.results : [...products, ...data.results]);
      })
      .finally(() => {
        setLoading(false);
        setLimitLoading(false);
      });
  }, [searchText, page]);

  const handleSearch = () => {
    if (searchText !== itemName) {
      setPage(0);
      setSearchText(itemName !== '' ? itemName : undefined);
      setLoading(true);
    }
  };

  const handlePagination = () => {
    if (total > 7 * page + 1 && !limitLoading) {
      setLimitLoading(true);
      setPage(page + 1);
    }
  };

  if (loading) {
    return <StyledActivityIndicator />;
  }

  return (
    <BackgroundView>
      <HomeHeader />
      <InputBox>
        <StyledSearchInput
          testID="search-input"
          onChangeText={setItemName}
          value={itemName}
        />
        <TouchableOpacity testID="search-submit" onPress={() => handleSearch()}>
          <Icon name="md-search-outline" size={25} color="#111111" />
        </TouchableOpacity>
      </InputBox>
      <StyledFlatList
        initialNumToRender={20}
        testID="flat-list"
        ListFooterComponent={
          limitLoading && (
            <ActivityIndicator
              size="large"
              color="#111111"
              testID="list-loading"
            />
          )
        }
        onEndReached={() => {
          handlePagination();
        }}
        onEndReachedThreshold={0.2}
        keyExtractor={item => `${item.id}`}
        data={products}
        renderItem={({item}) => (
          <CardItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.value}
            categoryName={item.category.name}
          />
        )}
      />
    </BackgroundView>
  );
};

export default Home;
