import { PrismaClient } from '@prisma/client';
import express, { Application, Request, Response } from 'express';
import router from './routes';
import { asyncHandler } from './utils';

async function main() {
  const app: Application = express();
  const PORT: number = 3000;

  app.use(router);

  app.use(
    '/health',
    asyncHandler(async (_: Request, res: Response) => {
      return res.status(200).send('OK');
    })
  );

  app.use('/', (_: Request, res: Response): void => {
    res.send('Hello world!');
  });

  app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
  });
}

export default main;
