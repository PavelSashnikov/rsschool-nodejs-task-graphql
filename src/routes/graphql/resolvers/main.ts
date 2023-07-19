import { MemberResolvers } from './member.js';
import { PostResolvers } from './post.js';
import { ProfileResolvers } from './profile.js';
import { UserResolvers } from './user.js';

export const rootValue = {
  ...UserResolvers,
  ...ProfileResolvers,
  ...MemberResolvers,
  ...PostResolvers,
};
