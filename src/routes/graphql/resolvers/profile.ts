import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const ProfileResolvers = {
  profile: async ({ id }: { id: UUID }) => {
    return await prisma.profile.findFirst({ where: { id } });
  },
  profiles: async () => {
    return await prisma.profile.findMany();
  },
};
