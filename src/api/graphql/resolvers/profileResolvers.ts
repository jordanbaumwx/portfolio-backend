import { PrismaClient } from '@prisma/client';
import { Query, Resolver } from 'type-graphql';
import { Profile } from '../schemas/Profile';

@Resolver((of) => Profile)
export class ProfileResolver {
  private profiles: Profile[] = [];

  @Query((returns) => [Profile], { nullable: true })
  async getProfiles(): Promise<Profile[]> {
    const prisma = new PrismaClient();
    const profiles = await prisma.profile.findMany();
    this.profiles = profiles.map((profile) => {
      return {
        id: profile.id,
        name: profile.name,
        email: profile.email,
        bio: profile.bio,
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
