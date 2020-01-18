import React from 'react';
import styled from 'styled-components';

import { H1, H2, H3, H4 } from '@deity/falcon-ui';

import Accordion from '../Accordion';

const Wrapper = styled.div`
  grid-area: reviews;
`;

const ProductReviews = () => (
  <Wrapper>
    <H3 style={{ marginBottom: '10px' }}>Reviews</H3>
    <Accordion />
    <Accordion />
  </Wrapper>
);

export default ProductReviews;