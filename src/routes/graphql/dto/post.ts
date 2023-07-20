import { GraphQLInputObjectType, GraphQLString } from 'graphql';

export interface IPostDto {
  authorId: string;
  content: string;
  title: string;
}

export const postDto = new GraphQLInputObjectType({
  name: 'CreatePostInput',
  fields: () => ({
    authorId: { type: GraphQLString },
    content: { type: GraphQLString },
    title: { type: GraphQLString },
  }),
});
