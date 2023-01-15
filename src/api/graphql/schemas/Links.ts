import * as TypeGraphQL from 'type-graphql';
import { Education } from './Education';
import { Experience } from './Experience';
import { Maybe, Scalars } from './helpers';
export { TypeGraphQL };

export type Query = {
  __typename?: 'Query';
  links?: Maybe<Array<Maybe<Link | Experience>>>;
};

@TypeGraphQL.ObjectType()
export class Link {
  __typename?: 'Link';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  title!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  url!: Scalars['String'];

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  createdAt?: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  updatedAt?: Maybe<Scalars['Date']>;
}
