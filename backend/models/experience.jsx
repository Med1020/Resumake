import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },
  employer: { type: String },
  jobTitle: { type: String },
  city: { type: String },
  country: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  isPresent: { type: Boolean },
  description: { type: String },
});

module.exports = mongoose.model("Experience", experienceSchema);
