import * as TypeGraphQL from 'type-graphql';
import { GraphQLISODateTime } from 'type-graphql';
import { Maybe, Scalars } from './helpers';
export { TypeGraphQL };

export type Query = {
  __typename?: 'Query';
  education?: Maybe<Array<Maybe<Education>>>;
};

@TypeGraphQL.ObjectType()
export class Education {
  __typename?: 'Education';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  school!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  degree!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  field!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => String, { nullable: true })
  minors?: Scalars['String'];

  @TypeGraphQL.Field((type) => GraphQLISODateTime, { nullable: true })
  startDate!: Scalars['Date'];

  @TypeGraphQL.Field((type) => GraphQLISODateTime, { nullable: true })
  endDate?: Scalars['Date'];

  @TypeGraphQL.Field((type) => GraphQLISODateTime, { nullable: true })
  createdAt!: Scalars['Date'];

  @TypeGraphQL.Field((type) => GraphQLISODateTime, { nullable: true })
  updatedAt!: Scalars['Date'];

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  profileId!: Scalars['ID'];
}
