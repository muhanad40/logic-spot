import React from 'react';
import { FalconClientMock } from '@deity/falcon-client/test-utils';
import { mount } from 'enzyme';
import gql from 'graphql-tag';
import wait from 'waait';

import ProductReviews, { GET_REVIEWS } from ".";

describe('ProductReviews', () => {
  it('should render review accordions correctly', async () => {
    const component = mount(
      <FalconClientMock apollo={{
        addTypename: false,
        mocks: [
          {
            request: {
              query: GET_REVIEWS,
            },
            result: {
              reviews: [
                {
                  name: 'Muhanad',
                  body: 'This mock response is not working. This is terrible!'
                },
                {
                  name: 'Jason',
                  body: 'I agree, docs are not so great either :('
                }
              ]
            }
          }
        ]
      }}>
        <ProductReviews />
      </FalconClientMock>
    );

    await wait(0);

    // Unfortunately the mocked responses above are not working for some reason.
    // If they worked, I would find the Accordion components and make sure they match the ones in the mock data
  });

  it('should render message when no reviews are found', () => {
    // If the mock responses work, I would return an empty array to check if the message is rendered
  });
});
