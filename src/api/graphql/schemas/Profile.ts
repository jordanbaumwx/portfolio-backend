import * as TypeGraphQL from 'type-graphql';
import { Education } from './Education';
import { Experience } from './Experience';
import { Maybe, Scalars } from './helpers';
import { Link } from './Links';
import { Skill } from './Skills';
export { TypeGraphQL };

@TypeGraphQL.ObjectType()
export class Profile {
  __typename?: 'Profile';

  @TypeGraphQL.Field((type) => TypeGraphQL.ID)
  id!: Scalars['ID'];

  @TypeGraphQL.Field((type) => String)
  name!: Scalars['String'];

  @TypeGraphQL.Field((type) => String)
  email!: Scalars['String'];

  @TypeGraphQL.Field((type) => String, { nullable: true })
  bio?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => String, { nullable: true })
  photoURL?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => String, { nullable: true })
  tagline?: Maybe<Scalars['String']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  createdAt?: Maybe<Scalars['Date']>;

  @TypeGraphQL.Field((type) => Date, { nullable: true })
  updatedAt?: Maybe<Scalars['Date']>;

  // Create a One to Many relationship between Profile and Experience
  @TypeGraphQL.Field((type) => [Experience], { nullable: true })
  experiences?: Experience[];

  // Create a One to One relationship between Profile and Education
  @TypeGraphQL.Field((type) => [Education], { nullable: true })
  education?: Education[];

  // Create a One to Many relationship between Profile and Skill
  @TypeGraphQL.Field((type) => [Skill], { nullable: true })
  skills?: Skill[];

  // Create a One to Many relationship between Profile and Link
  @TypeGraphQL.Field((type) => [Link], { nullable: true })
  links?: Link[];
}
