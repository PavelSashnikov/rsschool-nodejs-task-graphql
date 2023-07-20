import { GraphQLFloat, GraphQLInputObjectType, GraphQLString } from 'graphql';
import { MemberId } from '../entities/enum.js';

export const profileDto = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: () => ({
    userId: { type: GraphQLString },
    memberTypeId: { type: MemberId },
    isMale: { type: GraphQLFloat },
    yearOfBirth: { type: GraphQLFloat },
  }),
});
