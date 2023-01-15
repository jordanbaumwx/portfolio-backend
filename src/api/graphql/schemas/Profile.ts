import * as TypeGraphQL from 'type-graphql';
import { Experience } from './Experience';
export { TypeGraphQL };
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type FixDecorator<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: number;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Query = {
  __typename?: 'Query';
  profiles?: Maybe<Array<Maybe<Profile | Experience>>>;
};

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

  // Create a One to Many relationship between Profile and Experience
  @TypeGraphQL.Field((type) => [Experience], { nullable: true })
  experiences?: Experience[];
}
