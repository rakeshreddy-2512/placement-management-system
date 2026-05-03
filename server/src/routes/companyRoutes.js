import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { getCompanyApplications, postJob, upsertCompany } from '../controllers/companyController.js';

const router = Router();
router.use(protect(['company']));
router.put('/profile', upsertCompany);
router.post('/jobs', postJob);
router.get('/applications', getCompanyApplications);

export default router;
