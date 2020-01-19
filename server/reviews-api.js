const { ApiDataSource } = require('@deity/falcon-server-env');
const { addResolveFunctionsToSchema } = require('graphql-tools');

module.exports = class ReviewsApi extends ApiDataSource {
  constructor(params) {
    super(params);
    this.addTypeResolvers();
  }

  async addTypeResolvers() {
    addResolveFunctionsToSchema({
      schema: this.gqlServerConfig.schema,
      resolvers: {
        Query: {
          reviews: () => this.get('/comments').then(comments => comments.slice(-10)),
        },
      },
    });
  }
}