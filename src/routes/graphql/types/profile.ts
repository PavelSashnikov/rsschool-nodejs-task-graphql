import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { UUIDType } from './uuid.js';
import { userType } from './user.js';
import { memberType } from './member.js';
import { UserResolvers } from '../resolvers/user.js';
import { Profile } from '@prisma/client';
import { UUID } from 'crypto';
import { MemberResolvers } from '../resolvers/member.js';

export const profileType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLFloat },
    user: {
      type: userType,
      async resolve(profile: Profile) {
        return await UserResolvers.user({ id: profile.id as UUID });
      },
    },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberType: {
      type: memberType,
      async resolve(profile: Profile) {
        return await MemberResolvers.memberType({ id: profile.memberTypeId });
      },
    },
    memberTypeId: { type: GraphQLString },
  }),
});
