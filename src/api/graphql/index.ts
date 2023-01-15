import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { ProfileResolver } from './resolvers/profileResolvers';
import { ExperienceResolver } from './resolvers/experienceResolvers';
import express from 'express';
import { EducationResolver } from './resolvers/educationResolvers';
import { LinkResolver } from './resolvers/linkResolvers';

async function main() {
  const schema = await buildSchema({
    resolvers: [
      ProfileResolver,
      ExperienceResolver,
      EducationResolver,
      LinkResolver,
    ],
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
