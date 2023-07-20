import { GraphQLObjectType } from 'graphql';
import { userType } from '../types/user.js';
import { userDto } from '../dto/user.js';
import { profileType } from '../types/profile.js';
import { profileDto } from '../dto/profile.js';
import { postType } from '../types/post.js';
import { postDto } from '../dto/post.js';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    createUser: { type: userType, args: { dto: { type: userDto } } },
    // deleteUser
    // changeUser

    createPost: { type: postType, args: { dto: { type: postDto } } },
    // changePost
    // deletePost

    createProfile: { type: profileType, args: { dto: { type: profileDto } } },
    // deleteProfile
    // changeProfile
  }),
});
