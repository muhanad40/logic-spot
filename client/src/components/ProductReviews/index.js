import React from 'react';
import styled from 'styled-components';
import { H3 } from '@deity/falcon-ui';
import gql from 'graphql-tag';
import { Query } from '@deity/falcon-ecommerce-uikit';

import Accordion from '../Accordion';

const Wrapper = styled.div`
  grid-area: reviews;
`;

export const GET_REVIEWS = gql`
  query GetProductReviews {
    reviews {
      id
      name
      body
    }
  }
`;

const Heading = styled(H3)`
  margin-bottom: 10px;
`;

class ProductReviewsQuery extends Query {
  static defaultProps = {
    query: GET_REVIEWS,
    fetchPolicy: "cache-and-network"
  };
}

const ProductReviews = () => {
  return (
    <Wrapper>
      <Heading>Reviews</Heading>
      <ProductReviewsQuery>
        {({ loading, error, reviews}) => {
          if (!loading && !error) {
            return reviews.map(({ id, name, body }) => <Accordion key={id} title={name} content={body} />);
          }
          else if (reviews.length === 0) {
            return <div>There are no reviews yet. <a href="#">Be the first to post a review!</a></div>
          }
        }}
      </ProductReviewsQuery>
    </Wrapper>
  );
}

export default ProductReviews;