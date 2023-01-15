import { z } from 'zod';

export const Education = z.object({
  id: z.number().int().gt(0),
  school: z.string(),
  degree: z.string(),
  field: z.string().optional(),
  minors: z.string().optional(),
  startDate: z.date(),
  endDate: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  profileId: z.number().int().gt(0),
});
