// Description: Profile routes

import { PrismaClient } from '@prisma/client';
import { Router, Request, Response } from 'express';
import { asyncHandler } from '../../utils';

const router = Router();
router.get(
  '/:id',
  asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    // Make sure email is defined and a string
    if (!id || typeof id !== 'number') {
      return res.status(400).send('ID is required');
    }

    const prisma = new PrismaClient();
    const skill = await prisma.link.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return res.send(skill);
  })
);

export default router;
