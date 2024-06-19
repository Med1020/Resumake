const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema({
  title: { type: String },
  issuer: { type: String },
  date: Number,
  description: String,
});

module.exports = mongoose.model("Award", awardSchema);
