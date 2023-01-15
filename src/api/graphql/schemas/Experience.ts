import * as TypeGraphQL from 'type-graphql';
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
