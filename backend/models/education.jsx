import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
  resume: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resume",
    required: true,
  },
  degree: { type: String },
  school: { type: String },
  city: { type: String },
  country: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  isPresent: { type: Boolean },
});

module.exports = mongoose.model("Education", educationSchema);
