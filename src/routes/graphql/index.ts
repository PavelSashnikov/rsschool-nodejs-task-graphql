import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, querySchema } from './schemas.js';
import { graphql } from 'graphql';
import { rootValue } from './resolvers/main.js';

const plugin: FastifyPluginAsyncTypebox = async (fastify) => {
  fastify.route({
    url: '/',
    method: 'POST',
    schema: {
      ...createGqlResponseSchema,
      response: {
        200: gqlResponseSchema,
      },
    },
    async handler(req) {
      return await graphql({
        schema: querySchema,
        source: req.body.query,
        rootValue,
        variableValues: req.body.variables
      });
    },
  });
};

export default plugin;
