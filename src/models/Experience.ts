// Defines the Experience model in zod
import { z } from 'zod';

export const Experience = z.object({
  id: z.number().int().gt(0),
  title: z.string(),
  company: z.string(),
  remote: z.boolean(),
  location: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  profileId: z.number().int().gt(0),
});

export type Experience = z.infer<typeof Experience>;
