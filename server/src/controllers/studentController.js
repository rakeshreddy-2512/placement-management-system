import { StudentProfile } from '../models/StudentProfile.js';
import { Application } from '../models/Application.js';
import { Job } from '../models/Job.js';

export const upsertProfile = async (req, res) => {
  const profile = await StudentProfile.findOneAndUpdate(
    { user: req.user.id },
    { ...req.body, user: req.user.id },
    { upsert: true, new: true }
  );
  res.json(profile);
};

export const getEligibleJobs = async (req, res) => {
  const profile = await StudentProfile.findOne({ user: req.user.id });
  if (!profile) return res.status(400).json({ message: 'Create profile first' });

  const jobs = await Job.find({
    minCgpa: { $lte: profile.cgpa },
    maxBacklogs: { $gte: profile.backlogs },
    allowedBranches: { $in: [profile.branch] }
  }).populate('company');

  res.json(jobs);
};

export const applyToJob = async (req, res) => {
  const profile = await StudentProfile.findOne({ user: req.user.id });
  if (!profile) return res.status(400).json({ message: 'Create profile first' });
  const app = await Application.create({ job: req.params.jobId, student: profile._id });
  res.status(201).json(app);
};
