import { PrismaClient } from '@prisma/client';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type';
import { Arg, Query, Resolver } from 'type-graphql';
import { Skill } from '../schemas/Skills';

@Resolver((of) => Skill)
export class SkillResolver {
  private skills: Skill[] = [];

  @Query((returns) => [Skill], { nullable: true })
  async getSkills(
    @Arg('id', (type) => GraphQLInt, { nullable: true }) id?: number
  ): Promise<Skill[]> {
    const prisma = new PrismaClient();
    const skills = await prisma.skill.findMany({
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
