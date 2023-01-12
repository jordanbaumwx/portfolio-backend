import { PrismaClient } from '@prisma/client';
import express, { Application, Request, Response } from 'express';
import { asyncHandler } from './utils';

const app: Application = express();

const PORT: number = 3000;

app.get(
  '/profile',
  asyncHandler(async (_: Request, res: Response) => {
    const prisma = new PrismaClient();
    const profile = await prisma.profile.findFirst({
      where: {
        id: 1,
      },
    });
    res.send(profile);
  })
);

app.use('/', (_: Request, res: Response): void => {
  res.send('Hello world!');
});

app.listen(PORT, (): void => {
  console.log('SERVER IS UP ON PORT:', PORT);
});
