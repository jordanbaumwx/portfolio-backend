import * as TypeGraphQL from 'type-graphql';
import { GraphQLISODateTime } from 'type-graphql';
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
  profiles?: Maybe<Array<Maybe<Education>>>;
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
