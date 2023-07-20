import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';
import { IUserDto } from '../dto/user.js';
import { IContextDataLoader } from '../dataLoader/interface.js';

const prisma = new PrismaClient();

export const UserResolvers = {
  user: async ({ id }: { id: UUID }, context: IContextDataLoader) => {
    return await context.user.load(id);
  },
  users: async (_, context: IContextDataLoader) => {
    const users = await prisma.user.findMany();
    users.forEach((u) => context.user.prime(u.id, u));
    return users;
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
  changeUser: async ({ id, dto }: { id: UUID; dto: Partial<IUserDto> }) => {
    return await prisma.user.update({
      where: { id },
      data: dto,
    });
  },
};
