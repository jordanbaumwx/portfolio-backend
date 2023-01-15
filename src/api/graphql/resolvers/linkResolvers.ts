import { PrismaClient } from '@prisma/client';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type';
import { Arg, Query, Resolver } from 'type-graphql';
import { Link } from '../schemas/Links';

@Resolver((of) => Link)
export class LinkResolver {
  private links: Link[] = [];

  @Query((returns) => [Link], { nullable: true })
  async getLinks(
    @Arg('id', (type) => GraphQLInt, { nullable: true }) id?: number
  ): Promise<Link[]> {
    const prisma = new PrismaClient();
    const links = await prisma.link.findMany({
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
