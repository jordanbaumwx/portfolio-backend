import * as TypeGraphQL from 'type-graphql';
import { Maybe, Scalars } from './helpers';
export { TypeGraphQL };

export type Query = {
  __typename?: 'Query';
  experiences?: Maybe<Array<Maybe<Experience>>>;
};

@TypeGraphQL.ObjectType()
export class Experience {
  __typename?: 'Experience';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  title!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  company!: Scalars['String'];

  @TypeGraphQL.Field((type) => String, { nullable: true })
  location!: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => Boolean, { nullable: true })
  remote!: Maybe<Scalars['Boolean']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  startDate!: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  endDate!: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  createdAt!: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  updatedAt!: Maybe<Scalars['Date']>;
}
