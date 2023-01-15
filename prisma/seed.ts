import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Add basic profile information
  await prisma.profile.deleteMany({
    where: { email: 'career@jordanbaumgardner.com' },
  });
  const profile = await prisma.profile.create({
    data: {
      email: 'career@jordanbaumgardner.com',
      name: 'Jordan Baumgardner',
      tagline: 'Senior Software Engineer',
      bio: 'Senior software engineer has 6+ years of experience developing various software systems and services for a diverse range of clients including private entities, international weather services, airport agencies, farmers, and other business users through web-based applications.',
    },
  });

  const farmersRisk = await prisma.experience.create({
    data: {
      title: 'Senior Software Engineer',
      company: 'Farmers Risk',
      location: 'Ames, IA',
      remote: true,
      startDate: new Date('2022-01-31'),
      endDate: null,
      profileId: profile.id,
    },
  });

  const radiometrics = await prisma.experience.create({
    data: {
      title: 'Software Engineer',
      company: 'Radiometrics',
      location: 'Boulder, CO',
      remote: false,
      startDate: new Date('2019-09-15'),
      endDate: new Date('2022-01-31'),
      profileId: profile.id,
    },
  });

  const wdssIntl = await prisma.experience.create({
    data: {
      title: 'Meteorological Programmer',
      company: 'WDSS International',
      location: 'Norman, OK',
      remote: false,
      startDate: new Date('2017-01-05'),
      endDate: new Date('2019-09-15'),
      profileId: profile.id,
    },
  });

  const education = await prisma.education.create({
    data: {
      school: 'University of Oklahoma',
      degree: 'B.S.',
      field: 'Meteorology',
      minors: 'Computer Science and Mathematics',
      startDate: new Date('2014-08-15'),
      endDate: new Date('2018-05-15'),
      profileId: profile.id,
    },
  });

  // CreateMany is not supported for SQLite
  const typeScript = await prisma.skills.create({
    data: {
      name: 'TypeScript',
      profileId: profile.id,
    },
  });

  await prisma.skillsOnExperiences.create({
    data: {
      experienceId: farmersRisk.id,
      skillId: typeScript.id,
    },
  });

  const react = await prisma.skills.create({
    data: {
      name: 'React.js',
      profileId: profile.id,
    },
  });
  await prisma.skillsOnExperiences.create({
    data: {
      experienceId: farmersRisk.id,
      skillId: react.id,
    },
  });

  const node = await prisma.skills.create({
    data: {
      name: 'Node.js',
      profileId: profile.id,
    },
  });
  await prisma.skillsOnExperiences.create({
    data: {
      experienceId: farmersRisk.id,
      skillId: node.id,
    },
  });

  const python = await prisma.skills.create({
    data: {
      name: 'Python',
      profileId: profile.id,
    },
  });

  const go = await prisma.skills.create({
    data: {
      name: 'Go',
      profileId: profile.id,
    },
  });

  await prisma.skillsOnExperiences.create({
    data: {
      experienceId: radiometrics.id,
      skillId: python.id,
    },
  });
  await prisma.skillsOnExperiences.create({
    data: {
      experienceId: radiometrics.id,
      skillId: react.id,
    },
  });

  await prisma.skillsOnExperiences.create({
    data: {
      experienceId: radiometrics.id,
      skillId: go.id,
    },
  });

  await prisma.links.create({
    data: {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/jordancoding/',
      profileId: profile.id,
    },
  });
}

async function run() {
  try {
    await main();
    console.log('Seed successful');
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

run();
