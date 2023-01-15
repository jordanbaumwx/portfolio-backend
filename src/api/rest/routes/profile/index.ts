// Description: Profile routes

import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { asyncHandler } from '../../utils';

const router = Router();
router.get(
  '/:email',
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

export default router;
