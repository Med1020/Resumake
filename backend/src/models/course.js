const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id:{ type: String },
  title: { type: String },
  intitution: { type: String },
  city: String,
  country: String,
  startDate: Number,
  endDate: Number,
  description: String,
});

module.exports = mongoose.model("Course", courseSchema);
