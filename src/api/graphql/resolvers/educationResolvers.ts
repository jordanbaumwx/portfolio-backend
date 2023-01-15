import { PrismaClient } from '@prisma/client';
import { Query, Resolver } from 'type-graphql';
import { Education } from '../schemas/Education';

@Resolver((of) => Education)
export class EducationResolver {
  private education: Education[] = [];

  @Query((returns) => [Education], { nullable: true })
  async getEducation(): Promise<Education[]> {
    const prisma = new PrismaClient();
    const education = await prisma.education.findMany();
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
        profileId: education.profileId,
      } as unknown as Education;
    });
    return await this.education;
  }
}

/* GraphQL Query
    type Query {
    getProfiles: [Profile!]
    }
*/
