const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  title: { type: String },
  description: String,
});

module.exports = mongoose.model("Certificate", certificateSchema);
