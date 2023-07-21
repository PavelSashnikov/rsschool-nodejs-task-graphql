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
import { Profile } from '@prisma/client';
import { IContextDataLoader } from '../dataLoader/interface.js';

export const profileType: GraphQLObjectType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLFloat },
    user: {
      type: userType,
      async resolve(profile: Profile, arg, context: IContextDataLoader) {
        const { user } = context;
        return await user.load(profile.id);
      },
    },
    userId: { type: new GraphQLNonNull(UUIDType) },
    memberType: {
      type: memberType,
      async resolve(profile: Profile, arg, context: IContextDataLoader) {
        const { memberType } = context;
        return await memberType.load(profile.memberTypeId);
      },
    },
    memberTypeId: { type: GraphQLString },
  }),
});
