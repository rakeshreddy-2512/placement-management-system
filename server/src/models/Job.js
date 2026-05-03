import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    title: { type: String, required: true },
    location: { type: String, required: true },
    ctc: { type: Number, required: true },
    minCgpa: { type: Number, default: 0 },
    allowedBranches: [{ type: String }],
    maxBacklogs: { type: Number, default: 0 },
    deadline: { type: Date, required: true }
  },
  { timestamps: true }
);

export const Job = mongoose.model('Job', jobSchema);
