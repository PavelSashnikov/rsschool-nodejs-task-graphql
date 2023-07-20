import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';
import { IUserDto } from '../dto/user.js';

const prisma = new PrismaClient();

export const UserResolvers = {
  user: async ({ id }: { id: UUID }) => {
    return await prisma.user.findFirst({ where: { id } });
  },
  users: async () => {
    return await prisma.user.findMany();
  },
  createUser: async ({ dto }: { dto: IUserDto }) => {
    return await prisma.user.create({
      data: dto,
    });
  },
  deleteUser: async ({ id }: { id: UUID }) => {
    await prisma.user.delete({
      where: {
        id,
      },
    });
    return '';
  },
};
