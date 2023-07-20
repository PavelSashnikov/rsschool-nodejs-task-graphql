import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export const postDto = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: () => ({
    authorId: { type: GraphQLString },
    content: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});
