import mongoose from "mongoose";

const PortfolioSchema = new mongoose.Schema({
  name: String,
  role: String,
  education: String,
  projects: [
    {
      title: String,
      description: String,
      image: String,
    },
  ],
  skills: [String],
  achievements: [String],
});

export default mongoose.model("Portfolio", PortfolioSchema);
