const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  degree: { type: String },
  school: { type: String },
  city: { type: String },
  country: { type: String },
  startDate: { type: Number },
  endDate: { type: Number },
});

module.exports = mongoose.model("Education", educationSchema);
