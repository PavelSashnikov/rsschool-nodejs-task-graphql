import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const UserResolvers = {
  user: async ({ id }: { id: UUID }) => {
    return await prisma.user.findFirst({ where: { id } });
  },
  users: async () => {
    return await prisma.user.findMany();
  },
};
