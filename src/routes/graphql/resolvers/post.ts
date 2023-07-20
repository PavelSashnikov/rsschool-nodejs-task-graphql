import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';
import { IPostDto } from '../dto/post.js';

const prisma = new PrismaClient();

export const PostResolvers = {
  post: async ({ id }: { id: UUID }) => {
    return await prisma.post.findFirst({ where: { id } });
  },
  posts: async () => {
    return await prisma.post.findMany();
  },
  createPost: async ({dto}: {dto: IPostDto}) => {
    return await prisma.post.create({data: dto})
  }
};

export const getPosts = {
  byUserId: async (authorId: UUID) => {
    return await prisma.post.findMany({
      where: {
        authorId,
      },
    });
  },
};
