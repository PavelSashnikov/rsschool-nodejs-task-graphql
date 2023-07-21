import { GraphQLList, GraphQLNonNull, GraphQLObjectType } from 'graphql';
import { MemberId } from '../entities/enum.js';
import { memberType } from '../types/member.js';
import { postType } from '../types/post.js';
import { profileType } from '../types/profile.js';
import { userType } from '../types/user.js';
import { UUIDType } from '../types/uuid.js';

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    users: {
      type: new GraphQLList(userType),
    },
    profile: {
      type: profileType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    profiles: {
      type: new GraphQLList(profileType),
    },
    memberType: {
      type: memberType,
      args: {
        id: { type: new GraphQLNonNull(MemberId) },
      },
    },
    memberTypes: {
      type: new GraphQLList(memberType),
    },
    post: {
      type: postType,
      args: {
        id: { type: new GraphQLNonNull(UUIDType) },
      },
    },
    posts: {
      type: new GraphQLList(postType),
    },
  },
});
