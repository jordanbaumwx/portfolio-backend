import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.create({
    data: {
      email: 'career@jordanbaumgardner.com',
      name: 'Jordan Baumgardner',
      tagline: 'Senior Software Engineer',
    },
  });
}

try {
  await main();
  console.log('Seed successful');
} catch (e) {
  console.error(e);
} finally {
  await prisma.$disconnect();
}
