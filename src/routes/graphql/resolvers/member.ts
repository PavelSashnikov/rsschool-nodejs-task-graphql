import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const MemberResolvers = {
  memberType: async ({ id }: { id: string }) => {
    return await prisma.memberType.findFirst({ where: { id } });
  },
  memberTypes: async () => {
    return await prisma.memberType.findMany();
  },
};
