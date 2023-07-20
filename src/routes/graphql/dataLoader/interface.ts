import { MemberType, Post, Profile, User } from '@prisma/client';
import DataLoader from 'dataloader';

export interface IContextDataLoader {
  user: DataLoader<string, User>;
  profiles: DataLoader<string, Profile[]>;
  posts: DataLoader<string, Post[]>;
  subscribersFor: DataLoader<string, User[]>;
  subscribedTo: DataLoader<string, User[]>;
  memberType: DataLoader<string, MemberType[]>;
}
