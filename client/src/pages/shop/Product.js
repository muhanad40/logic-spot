import React from 'react';
import PropTypes from 'prop-types';
import { ProductQuery, Product } from '../../components/Product';

const ProductPage = ({ id, location }) => (
  <ProductQuery variables={{ id, path: location.pathname }}>
    {productProps => <Product {...productProps} />}
  </ProductQuery>
);
ProductPage.propTypes = {
  id: PropTypes.string.isRequired
};

export default ProductPage;
