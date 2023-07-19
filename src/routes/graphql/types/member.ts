import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { profileType } from './profile.js';
import { MemberId } from '../entities/enum.js';

export const memberType: GraphQLObjectType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
    id: { type: new GraphQLNonNull(MemberId) },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLFloat },
    profiles: { type: new GraphQLList(profileType) },
  }),
});
