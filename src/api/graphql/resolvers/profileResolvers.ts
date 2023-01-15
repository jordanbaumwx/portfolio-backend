import { PrismaClient } from '@prisma/client';
import { GraphQLBoolean, GraphQLInt, GraphQLString } from 'graphql/type';
import { Arg, Query, Resolver } from 'type-graphql';
import { Profile } from '../schemas/Profile';

@Resolver((of) => Profile)
export class ProfileResolver {
  private profiles: Profile[] = [];

  @Query((returns) => [Profile], { nullable: true })
  async getProfiles(
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
  ): Promise<Profile[]> {
    const prisma = new PrismaClient();
    const profiles = await prisma.profile.findMany({
      where: {
        id,
        email,
        name,
      },
      include: {
        Experience: includeExperiences ?? false,
        Skills: includeSkills ?? false,
        Links: includeLinks ?? false,
        Education: includeEducation ?? false,
      },
    });
    this.profiles = profiles.map((profile) => {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        photoURL: profile.photoURL,
        tagline: profile.tagline,
        bio: profile.bio,
        experiences: profile.Experience,
        education: profile.Education,
        createdAt: profile.createdAt,
        updatedAt: profile.updatedAt,
      } as Profile;
    });
    return await this.profiles;
  }
}

/* GraphQL Query
    type Query {
    getProfiles: [Profile!]
    }
*/
