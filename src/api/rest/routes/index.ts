// Create a new express router
//
// Path: src/api/rest/routes/index.ts
//
import { Router } from 'express';
import profileRouter from './profile';
import skillsRouter from './skills';
import experiencesRouter from './experiences';

const router = Router();

// Add sub-routes
router.use('/profile', profileRouter);
router.use('/skills', skillsRouter);
router.use('/experiences', experiencesRouter);

// Export the router
export default router;
