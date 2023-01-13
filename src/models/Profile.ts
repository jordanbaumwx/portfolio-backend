// Defines the Profile model in zod
import { z } from 'zod';

export const Profile = z.object({
  id: z.number().int().gt(0),
  name: z.string(),
  email: z.string(),
  bio: z.string().optional(),
  photoURL: z.string().optional(),
  tagline: z.string().optional(),
  createdAt: z.date(),
  updatedAt: z.date(),

  /*
    TODO: Add the following fields to the Profile model:
    Experience Experience[]
    Links      Links[]
    Skills     Skills[]
    Education  Education[]
  */
});

// Export the Profile model type
export type Profile = z.infer<typeof Profile>;
