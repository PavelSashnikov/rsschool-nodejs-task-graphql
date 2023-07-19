import { Type } from '@fastify/type-provider-typebox';
import { GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema } from 'graphql';
import { userType } from './types/user.js';
import { UUIDType } from './types/uuid.js';
import { profileType } from './types/profile.js';

export const gqlResponseSchema = Type.Partial(
  Type.Object({
    data: Type.Any(),
    errors: Type.Any(),
  }),
);

export const createGqlResponseSchema = {
  body: Type.Object(
    {
      query: Type.String(),
      variables: Type.Optional(Type.Record(Type.String(), Type.Any())),
    },
    {
      additionalProperties: false,
    },
  ),
};

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    users: {
      type: new GraphQLList(userType),
    },
    prifile: {
      type: profileType,
      args: {
        id:  { type: new GraphQLNonNull(UUIDType) },
      }
    },
    prifiles: {
      type: new GraphQLList(profileType),
      args: {
        id:  { type: new GraphQLNonNull(UUIDType) },
      }
    }
  },
});

export const querySchema = new GraphQLSchema({ query });
