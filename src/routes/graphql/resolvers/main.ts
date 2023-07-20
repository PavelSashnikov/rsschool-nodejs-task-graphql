import { MemberResolvers } from './member.js';
import { PostResolvers } from './post.js';
import { ProfileResolvers } from './profile.js';
import { SubsResolver } from './subs.js';
import { UserResolvers } from './user.js';

export const rootValue = {
  ...UserResolvers,
  ...ProfileResolvers,
  ...MemberResolvers,
  ...PostResolvers,
  ...SubsResolver,
};
