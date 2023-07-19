import { PrismaClient } from '@prisma/client';
import { UUID } from 'crypto';

const prisma = new PrismaClient();

export const MemberResolvers = {
  member: async ({ id }: { id: UUID }) => {
    return await prisma.memberType.findFirst({ where: { id } });
  },
  members: async () => {
    return await prisma.memberType.findMany();
  },
};
