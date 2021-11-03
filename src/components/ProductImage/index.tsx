import React, {useEffect, useState} from 'react';
import {ImageContainer} from './styles';

import {useProducts} from '../../hooks/useProducts';
import StyledActivityIndicator from '../StyledActivityIndicator';

interface Props {
  id: number;
}

const ProductImage: React.FC<Props> = ({id}) => {
  const [image, setImage] = useState();

  const {getProductsImages} = useProducts();

  useEffect(() => {
    getProductsImages(id).then(({data}) => {
      setImage(data);
    });
  }, []);

  return image ? (
    <ImageContainer source={{uri: image}} />
  ) : (
    <StyledActivityIndicator />
  );
};

export default ProductImage;
