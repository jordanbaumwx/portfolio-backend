import { z } from 'zod';

export const Skill = z.object({
  id: z.number().int().gt(0),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  profileId: z.number().int().gt(0),
});
