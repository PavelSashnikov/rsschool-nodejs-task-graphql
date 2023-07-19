import { GraphQLFloat, GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { UUIDType } from './uuid.js';
import { profileType } from './profile.js';

export const memberType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Member',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    discount: { type: GraphQLFloat },
    postsLimitPerMonth: { type: GraphQLFloat },
    profiles: { type: new GraphQLList(profileType) },
  }),
});
