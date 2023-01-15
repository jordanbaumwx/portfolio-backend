import * as TypeGraphQL from 'type-graphql';
import { Experience } from './Experience';
import { Maybe, Scalars } from './helpers';
export { TypeGraphQL };

export type Query = {
  __typename?: 'Query';
  skills?: Maybe<Array<Maybe<Skill | Experience>>>;
};

@TypeGraphQL.ObjectType()
export class Skill {
  __typename?: 'Skill';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  createdAt?: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  updatedAt?: Maybe<Scalars['Date']>;
}
