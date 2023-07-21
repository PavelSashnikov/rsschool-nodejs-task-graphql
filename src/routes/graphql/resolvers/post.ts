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
  createPost: async ({ dto }: { dto: IPostDto }) => {
    return await prisma.post.create({ data: dto });
  },
  deletePost: async ({ id }: { id: UUID }) => {
    await prisma.post.delete({ where: { id } });
    return '';
  },
  changePost: async ({ id, dto }: { id: UUID; dto: Partial<IPostDto> }) => {
    return await prisma.post.update({
      where: { id },
      data: dto,
    });
  },
};