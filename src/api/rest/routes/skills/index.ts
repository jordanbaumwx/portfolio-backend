// Description: Profile routes

import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { asyncHandler } from '../../utils';

const router = Router();
router.get(
  '/:experienceId',
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
    return res.send(skills.map((skill) => skill.skill));
  })
);

export default router;
