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
import { SubscribersOnAuthors, User } from '@prisma/client';
import { IContextDataLoader } from '../dataLoader/interface.js';

interface UserFields extends User {
  userSubscribedTo?: SubscribersOnAuthors[];
  subscribedToUser?: SubscribersOnAuthors[];
}

export const userType: GraphQLObjectType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: new GraphQLNonNull(UUIDType) },
    name: { type: GraphQLString },
    balance: { type: GraphQLFloat },
    profile: {
      type: profileType,
      async resolve(user: User, _, context: IContextDataLoader) {
        const { profiles } = context;

        return profiles.load(user.id);
      },
    },
    posts: {
      type: new GraphQLList(postType),
      async resolve(user: User, _, context: IContextDataLoader) {
        const { posts } = context;
        const res = await posts.load(user.id);
        return [res];
      },
    },
    userSubscribedTo: {
      type: new GraphQLList(userType),
      async resolve(userData: UserFields, _, context: IContextDataLoader) {
        // const { subscribedTo } = context;
        // const res = await subscribedTo.load(user.id)
        // return [res];
        const { user } = context;
        return user.loadMany(userData.userSubscribedTo?.map((s) => s.authorId) || []);
      },
    },
    subscribedToUser: {
      type: new GraphQLList(userType),
      async resolve(userData: UserFields, _, context: IContextDataLoader) {
        // const { subscribersFor } = context;
        // return [subscribersFor.load(user.id)];
        const { user } = context;
        return user.loadMany(userData.subscribedToUser?.map((s) => s.subscriberId) || []);
      },
    },
  }),
});
