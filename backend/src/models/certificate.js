const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
  id:{ type: String },
  title: { type: String },
  description: String,
});

module.exports = mongoose.model("Certificate", certificateSchema);
