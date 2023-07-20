import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLString } from 'graphql';
import { MemberId } from '../entities/enum.js';

export interface IProfileDto {
  userId: string;
  memberTypeId: string;
  isMale: boolean;
  yearOfBirth: number;
}

export const profileDto = new GraphQLInputObjectType({
  name: 'CreateProfileInput',
  fields: () => ({
    userId: { type: GraphQLString },
    memberTypeId: { type: MemberId },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
  }),
});
