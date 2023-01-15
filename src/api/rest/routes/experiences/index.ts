// Description: Profile routes

import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { asyncHandler } from '../../utils';

const router = Router();

router.get('/:skillId', async (req: Request, res: Response) => {
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
  return res.send(experiences.map((experience) => experience.experience));
});

export default router;
