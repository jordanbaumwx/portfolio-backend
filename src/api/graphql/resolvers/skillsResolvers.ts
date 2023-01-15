import { PrismaClient } from '@prisma/client';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type';
import { Arg, Query, Resolver } from 'type-graphql';
import { Skill } from '../schemas/Skills';

@Resolver((of) => Skill)
export class SkillResolver {
  private skills: Skill[] = [];

  @Query((returns) => [Skill], { nullable: true })
  async getSkills(
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
  ): Promise<Skill[]> {
    const prisma = new PrismaClient();
    const skills = await prisma.skills.findMany({
      where: {
        id,
      },
    });
    this.skills = skills.map((skill) => {
      return {
        id: skill.id,
        name: skill.name,
        createdAt: skill.createdAt,
        updatedAt: skill.updatedAt,
      } as Skill;
    });
    return this.skills;
  }
}

/* GraphQL Query
    type Query {
    getProfiles: [Profile!]
    }
*/
