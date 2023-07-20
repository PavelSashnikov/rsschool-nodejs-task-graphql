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
  deleteProfile: async ({ id }: { id: UUID }) => {
    await prisma.profile.delete({ where: { id } });
    return '';
  },
  changeProfile: async ({ id, dto }: { id: UUID; dto: Partial<IProfileDto> }) => {
    return await prisma.profile.update({
      where: { id },
      data: dto,
    });
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
