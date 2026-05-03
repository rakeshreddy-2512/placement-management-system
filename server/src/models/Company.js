import mongoose from 'mongoose';

const companySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    companyName: { type: String, required: true },
    website: String,
    description: String
  },
  { timestamps: true }
);

export const Company = mongoose.model('Company', companySchema);
