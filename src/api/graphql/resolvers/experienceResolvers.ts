import { PrismaClient } from '@prisma/client';
import { Query, Resolver } from 'type-graphql';
import { Experience } from '../schemas/Experience';

@Resolver((of) => Experience)
export class ExperienceResolver {
  private experiences: Experience[] = [];

  @Query((returns) => [Experience], { nullable: true })
  async getExperiences(): Promise<Experience[]> {
    const prisma = new PrismaClient();
    const experiences = await prisma.experience.findMany();
    this.experiences = experiences.map((experience) => {
      return {
        id: experience.id,
        title: experience.title,
        company: experience.company,
        location: experience.location,
        remote: experience.remote,
        startDate: experience.startDate,
        endDate: experience.endDate,
        createdAt: experience.createdAt,
        updatedAt: experience.updatedAt,
      } as unknown as Experience;
    });
    return this.experiences;
  }
}

/* GraphQL Query
    type Query {
    getProfiles: [Profile!]
    }
*/
