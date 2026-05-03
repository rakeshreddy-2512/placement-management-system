import { User } from '../models/User.js';
import { Job } from '../models/Job.js';
import { Application } from '../models/Application.js';

export const getAdminStats = async (_req, res) => {
  const [users, jobs, applications, selected] = await Promise.all([
    User.countDocuments(),
    Job.countDocuments(),
    Application.countDocuments(),
    Application.countDocuments({ status: 'selected' })
  ]);

  res.json({ users, jobs, applications, selected, placementRate: applications ? (selected / applications) * 100 : 0 });
};
