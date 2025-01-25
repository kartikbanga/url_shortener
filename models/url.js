const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  shortURL: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
  },
  customURL: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("URL", urlSchema);
