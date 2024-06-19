const mongoose = require("mongoose");
const Education = require("./education");
const Experience = require("./experience");
const Project = require("./project");
const Skill = require("./skill");
const Certificate = require("./certificate");
const Course = require("./course");
const Award = require("./award");

const resumeSchema = new mongoose.Schema({
  resumeName: { type: String, required: true, default: "Resume 1" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  fullName: { type: String, default: "" },
  jobTitle: { type: String, default: "" },
  phone: { type: String, default: "" },
  address: { type: String, default: "" },
  email: { type: String, default: "" },
  education: [Education.schema],
  experience: [Experience.schema],
  project: [Project.schema],
  skill: [Skill.schema],
  certificate: [Certificate.schema],
  course: [Course.schema],
  award: [Award.schema],
});

module.exports = mongoose.model("Resume", resumeSchema);
