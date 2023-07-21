import { GraphQLBoolean, GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
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
    userId: { type: new GraphQLNonNull(GraphQLString) },
    memberTypeId: { type: new GraphQLNonNull(MemberId) },
    isMale: { type: new GraphQLNonNull(GraphQLBoolean) },
    yearOfBirth: { type: new GraphQLNonNull(GraphQLInt) },
  }),
});
export const profileChangeDto = new GraphQLInputObjectType({
  name: 'ChangeProfileInput',
  fields: () => ({
    memberTypeId: { type: MemberId },
    isMale: { type: GraphQLBoolean },
    yearOfBirth: { type: GraphQLInt },
  }),
});
