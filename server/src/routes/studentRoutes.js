import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { applyToJob, getEligibleJobs, upsertProfile } from '../controllers/studentController.js';

const router = Router();
router.use(protect(['student']));
router.put('/profile', upsertProfile);
router.get('/jobs/eligible', getEligibleJobs);
router.post('/jobs/:jobId/apply', applyToJob);

export default router;
