import mongoose from 'mongoose';

const studentProfileSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    branch: { type: String, required: true },
    graduationYear: { type: Number, required: true },
    cgpa: { type: Number, min: 0, max: 10, required: true },
    skills: [{ type: String }],
    resumeUrl: { type: String },
    backlogs: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const StudentProfile = mongoose.model('StudentProfile', studentProfileSchema);
