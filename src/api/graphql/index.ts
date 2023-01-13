import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ProfileResolver } from './resolvers/profileResolvers';
import express from 'express';

async function main() {
  const schema = await buildSchema({
    resolvers: [ProfileResolver],
    emitSchemaFile: true,
  });

  const app = express();
  const server = new ApolloServer({
    schema,
  });
  await server.start();
  server.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`Server is running on http://localhost:4000/graphql`);
  });
}

export default main;