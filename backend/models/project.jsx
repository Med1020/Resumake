import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },
  title: { type: String },
  subTitle: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("Project", projectSchema);
