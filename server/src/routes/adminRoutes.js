import { Router } from 'express';
import { protect } from '../middleware/auth.js';
import { getAdminStats } from '../controllers/adminController.js';

const router = Router();
router.use(protect(['admin']));
router.get('/stats', getAdminStats);

export default router;
