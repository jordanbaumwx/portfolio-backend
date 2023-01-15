import { PrismaClient } from '@prisma/client';
import express, { Application, Request, Response } from 'express';
import { asyncHandler } from './utils';

async function main() {
  const app: Application = express();
  const PORT: number = 3000;

  app.get(
    '/profile',
    asyncHandler(async (req: Request, res: Response) => {
      const email = req.query.email;
      // Make sure email is defined and a string
      if (!email || typeof email !== 'string') {
        return res.status(400).send('Email is required');
      }

      const prisma = new PrismaClient();
      const profile = await prisma.profile.findUniqueOrThrow({
        where: {
          email,
        },
        include: {
          Skills: true,
          Experience: true,
          Links: true,
          Education: true,
        },
      });
      return res.send(profile);
    })
  );

  app.get(
    '/skills/:experienceId',
    asyncHandler(async (req: Request, res: Response) => {
      const experienceId = req.params.experienceId;
      // Make sure experienceId is defined and a number
      if (!experienceId || typeof experienceId !== 'number') {
        return res.status(400).send('Experience ID is required');
      }

      const prisma = new PrismaClient();
      const skills = await prisma.skillsOnExperiences.findMany({
        where: {
          experienceId,
        },
        include: {
          skill: true,
        },
      });
      return res.send(skills);
    })
  );

  app.get('/experiences/:skillId', async (req: Request, res: Response) => {
    const skillId = req.params.skillId;
    // Make sure skillId is defined and a number
    if (!skillId || typeof skillId !== 'number') {
      return res.status(400).send('Skill ID is required');
    }

    const prisma = new PrismaClient();
    const experiences = await prisma.skillsOnExperiences.findMany({
      where: {
        skillId,
      },
      include: {
        experience: true,
      },
    });
    return res.send(experiences);
  });

  app.use('/', (_: Request, res: Response): void => {
    res.send('Hello world!');
  });

  app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
  });
}

export default main;
