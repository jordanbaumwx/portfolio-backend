import { PrismaClient } from '@prisma/client';
import { GraphQLInt } from 'graphql/type';
import { Arg, Query, Resolver } from 'type-graphql';
import { Education } from '../schemas/Education';

@Resolver((of) => Education)
export class EducationResolver {
  private education: Education[] = [];

  @Query((returns) => [Education], { nullable: true })
  async getEducation(
    @Arg('id', (type) => GraphQLInt, { nullable: true }) id?: number
  ): Promise<Education[]> {
    const prisma = new PrismaClient();
    const education = await prisma.education.findMany({ where: { id } });
    this.education = education.map((education) => {
      return {
        id: education.id,
        school: education.school,
        degree: education.degree,
        field: education.field,
        minors: education.minors,
        startDate: education.startDate,
        endDate: education.endDate,
        createdAt: education.createdAt,
        updatedAt: education.updatedAt,
      } as unknown as Education;
    });
    return this.education;
  }
}
