const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  employer: { type: String },
  jobTitle: { type: String },
  city: { type: String },
  country: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
  description: { type: String },
});

module.exports = mongoose.model("Experience", experienceSchema);
