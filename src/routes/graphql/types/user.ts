import {
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import { UUIDType } from './uuid.js';
import { profileType } from './profile.js';
import { postType } from './post.js';
import { User } from '@prisma/client';
import { getProfile } from '../resolvers/profile.js';
import { UUID } from 'node:crypto';
import { getPosts } from '../resolvers/post.js';
import { getSubs } from '../resolvers/subs.js';

export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
    profile: {
      type: profileType,
      async resolve(user: User) {
        return await getProfile.byUserId(user.id as UUID);
      },
    },
    posts: {
      type: new GraphQLList(postType),
      async resolve(user: User) {
        return await getPosts.byUserId(user.id as UUID);
      },
    },
    userSubscribedTo: {
      type: new GraphQLList(userType),
      async resolve(user: User) {
        return await getSubs.usersById(user.id as UUID);
      },
    },
    subscribedToUser: {
      type: new GraphQLList(userType),
      async resolve(user: User) {
        return await getSubs.forUserById(user.id as UUID);
      },
    },
  }),
});
