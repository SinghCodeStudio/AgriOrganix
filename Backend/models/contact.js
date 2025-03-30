const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  message: { type: String },
  from: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("GetInTouch", ContactSchema);
