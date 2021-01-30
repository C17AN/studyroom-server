const express = require("express");
const router = express.Router();
const Seat = require("../models/seat");

router.get("/", async (req, res) => {
  try {
    const users = await Seat.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
