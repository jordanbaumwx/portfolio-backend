import 'reflect-metadata';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server';
import {
  FindManyProfileResolver,
  FindFirstProfileResolver,
} from '@generated/type-graphql';
import * as tq from 'type-graphql';

const prisma = new PrismaClient();

const graphqlApp = async () => {
  const schema = await tq.buildSchema({
    resolvers: [FindManyProfileResolver, FindFirstProfileResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const context = () => {
    return {
      prisma,
    };
  };

  new ApolloServer({ schema, context }).listen({ port: 4000 }, () =>
    console.log('🚀 Server ready at: <http://localhost:4000>')
  );
};

export default graphqlApp;
