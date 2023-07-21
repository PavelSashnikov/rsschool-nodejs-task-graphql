import { GraphQLObjectType, GraphQLString } from 'graphql';
import { userType } from '../types/user.js';
import { userChangeDto, userDto } from '../dto/user.js';
import { profileType } from '../types/profile.js';
import { profileChangeDto, profileDto } from '../dto/profile.js';
import { postType } from '../types/post.js';
import { postChangeDto, postDto } from '../dto/post.js';
import { UUIDType } from '../types/uuid.js';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: { type: userType, args: { dto: { type: userDto } } },
    deleteUser: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },
    changeUser: {
      type: userType,
      args: {
        id: { type: UUIDType },
        dto: { type: userChangeDto },
      },
    },

    createPost: { type: postType, args: { dto: { type: postDto } } },
    changePost: {
      type: postType,
      args: {
        id: { type: UUIDType },
        dto: { type: postChangeDto },
      },
    },
    deletePost: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    createProfile: { type: profileType, args: { dto: { type: profileDto } } },
    changeProfile: {
      type: profileType,
      args: {
        id: { type: UUIDType },
        dto: { type: profileChangeDto },
      },
    },
    deleteProfile: {
      type: GraphQLString,
      args: {
        id: { type: UUIDType },
      },
    },

    subscribeTo: {
      type: userType,
      args: {
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
      },
    },
    unsubscribeFrom: {
      type: GraphQLString,
      args: {
        userId: { type: UUIDType },
        authorId: { type: UUIDType },
      },
    },
  }),
});
