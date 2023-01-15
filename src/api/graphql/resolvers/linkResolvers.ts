import { PrismaClient } from '@prisma/client';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type';
import { Arg, Query, Resolver } from 'type-graphql';
import { Link } from '../schemas/Links';

@Resolver((of) => Link)
export class LinkResolver {
  private links: Link[] = [];

  @Query((returns) => [Link], { nullable: true })
  async getLinks(
    @Arg('id', (type) => GraphQLInt, { nullable: true }) id?: number,
    @Arg('email', (type) => GraphQLString, { nullable: true }) email?: string,
    @Arg('name', (type) => GraphQLString, { nullable: true }) name?: string,
    @Arg('includeExperiences', (type) => GraphQLBoolean, { nullable: true })
    includeExperiences?: boolean,
    @Arg('includeSkills', (type) => GraphQLBoolean, { nullable: true })
    includeSkills?: boolean,
    @Arg('includeLinks', (type) => GraphQLBoolean, { nullable: true })
    includeLinks?: boolean,
    @Arg('includeEducation', (type) => GraphQLBoolean, { nullable: true })
    includeEducation?: boolean
  ): Promise<Link[]> {
    const prisma = new PrismaClient();
    const links = await prisma.links.findMany({
      where: {
        id,
      },
    });
    this.links = links.map((profile) => {
      return {
        id: profile.id,
        title: profile.title,
        url: profile.url,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      } as Link;
    });
    return this.links;
  }
}

/* GraphQL Query
    type Query {
    getProfiles: [Profile!]
    }
*/
