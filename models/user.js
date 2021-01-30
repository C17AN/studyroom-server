const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  school: {
    type: String,
  },
  grade: {
    type: Number,
  },
  contact: {
    type: String,
  },
  contact_parent: {
    type: String,
  },
  // 현재 상태 (식사, 학원 등)
  state: {
    type: String,
  },
  // 최초 가입일
  created_at: {
    type: Date,
    required: true,
    default: new Date().toLocaleString(),
  },
  last_checkout: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
