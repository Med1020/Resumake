import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  resumeName: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Resume", resumeSchema);
