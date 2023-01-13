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
      } as unknown as Experience;
    });
    return await this.experiences;
  }
}

/* GraphQL Query
    type Query {
    getProfiles: [Profile!]
    }
*/
