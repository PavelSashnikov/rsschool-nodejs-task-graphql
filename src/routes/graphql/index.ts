import { FastifyPluginAsyncTypebox } from '@fastify/type-provider-typebox';
import { createGqlResponseSchema, gqlResponseSchema, querySchema } from './schemas.js';
import { graphql, parse, validate } from 'graphql';
import { rootValue } from './resolvers/main.js';
import depthLimit from 'graphql-depth-limit';
import { createDataLoaders } from './dataLoader/dataLoader.js';

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
      const ast = parse(req.body.query);
      const validationErrors = validate(querySchema, ast, [depthLimit(5)]);
      if (validationErrors.length) {
        return { errors: validationErrors };
      }

      return await graphql({
        schema: querySchema,
        source: req.body.query,
        rootValue,
        variableValues: req.body.variables,
        contextValue: { db: fastify.prisma, ...createDataLoaders(fastify.prisma) },
      });
    },
  });
};

export default plugin;
