import { Company } from '../models/Company.js';
import { Job } from '../models/Job.js';
import { Application } from '../models/Application.js';

export const upsertCompany = async (req, res) => {
  const company = await Company.findOneAndUpdate(
    { user: req.user.id },
    { ...req.body, user: req.user.id },
    { upsert: true, new: true }
  );
  res.json(company);
};

export const postJob = async (req, res) => {
  const company = await Company.findOne({ user: req.user.id });
  if (!company) return res.status(400).json({ message: 'Company profile required' });
  const job = await Job.create({ ...req.body, company: company._id });
  res.status(201).json(job);
};

export const getCompanyApplications = async (req, res) => {
  const company = await Company.findOne({ user: req.user.id });
  const jobs = await Job.find({ company: company._id });
  const ids = jobs.map((j) => j._id);
  const applications = await Application.find({ job: { $in: ids } })
    .populate({ path: 'student', populate: { path: 'user', select: 'name email' } })
    .populate('job');
  res.json(applications);
};
