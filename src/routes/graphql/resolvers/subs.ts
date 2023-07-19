import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const getSubs = {
  forUserById: async (authorId: UUID) => {
    return await prisma.user.findMany({
      where: {
        userSubscribedTo: {
          some: {
            authorId,
          },
        },
      },
    });
  },
  usersById: async (subscriberId: UUID) => {
    return await prisma.user.findMany({
      where: {
        subscribedToUser: {
          some: {
            subscriberId,
          },
        },
      },
    });
  },

};
