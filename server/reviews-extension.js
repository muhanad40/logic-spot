const { Extension } = require('@deity/falcon-server-env');

class ReviewsExtension extends Extension {
  async getGraphQLConfig() {
    const gqlConfig = await super.getGraphQLConfig(`
      type ReviewComment {
        id: String
        name: String
        body: String
      }

      extend type Query {
        reviews: [ReviewComment]
      }
    `);

    return gqlConfig;
  }
}

module.exports = ReviewsExtension;
