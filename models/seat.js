const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  room: {
    type: Number,
    required: true,
    default: 1,
  },
  tableIndex: {
    type: Number,
    required: true,
  },
  isEmpty: {
    type: Boolean,
    required: true,
  },
  usedBy: {
    type: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  },
});

module.exports = mongoose.model("Seat", seatSchema);
