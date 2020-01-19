# Product reviews technical test

This is a small project that attempts to render dummy comments on a product page. This project uses [Deity Falcon](https://falcon.deity.io/).

## Important note:
I've tried to get a unit test to work that verifies the `ProductReviews` component does the correct GraphQL request, but for some unknow reasons it doesn't work. I've spent too much time investigating this so I've decided to leave the test file incomplete with some comments.

## How to run it

Open two terminal tabs:

#### Terminal 1 - Run the client:
```bash
git clone https://github.com/muhanad40/logic-spot.git
cd logic-spot/client
yarn install
yarn start
# or you can run product build with:
yarn start:prod
```

#### Terminal 2 - Run the server:
```bash
git clone https://github.com/muhanad40/logic-spot.git
cd logic-spot/server
yarn install
yarn start
# or you can run product build with:
yarn start:prod
```

Point your browser to http://localhost:3000/ to see the demo e-commerce store. Browser to a product page and you'll see dummy review comments under the `Add to Cart` button.

## Running the client unit tests

To run tests:

```bash
cd logic-spot/client
yarn test
```