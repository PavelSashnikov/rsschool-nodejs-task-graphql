import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';
import { IProfileDto } from '../dto/profile.js';

const prisma = new PrismaClient();

export const ProfileResolvers = {
  profile: async ({ id }: { id: UUID }) => {
    return await prisma.profile.findFirst({ where: { id } });
  },
  profiles: async () => {
    return await prisma.profile.findMany();
  },
  createProfile: async ({ dto }: { dto: IProfileDto }) => {
    return await prisma.profile.create({ data: dto });
  },
};

export const getProfile = {
  byUserId: async (userId: UUID) => {
    return await prisma.profile.findUnique({
      where: {
        userId,
      },
    });
  },
};
