import { z } from 'zod';

export const Link = z.object({
  id: z.number().int().gt(0),
  title: z.string(),
  url: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  profileId: z.number().int().gt(0),
});
