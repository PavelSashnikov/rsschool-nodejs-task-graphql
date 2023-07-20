import { GraphQLFloat, GraphQLInputObjectType, GraphQLString } from 'graphql';

export const userDto = new GraphQLInputObjectType({
  name: 'CreateUserInput',
  fields: () => ({
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
  }),
});
