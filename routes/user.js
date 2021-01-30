const express = require("express");
const router = express.Router();
const User = require("../models/user");

// method: GET
// descrption: 전체 고객 데이터 요청
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// method: GET
// descrption: 특정 고객 데이터 요청
router.get("/:id", getUser, (req, res) => {
  res.json(res.user);
});

// method: POST
// description : 새로운 고객 데이터 추가
router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    gender: req.body.gender,
    school: req.body.school,
    grade: req.body.grade,
    contact: req.body.contact,
    contact_parent: req.body.contact_parent,
    created_at: new Date().toLocaleString(),
  });

  try {
    const newuser = await user.save();
    res.status(201).json(newuser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// method: PATCH
// description : 고객 데이터 수정
router.patch("/:id", getUser, async (req, res) => {
  if (req.body.name != null) {
    res.user.name = req.body.name;
  }
  if (req.body.gender != null) {
    res.user.gender = req.body.gender;
  }
  if (req.body.school != null) {
    res.user.school = req.body.school;
  }
  if (req.body.grade != null) {
    res.user.grade = req.body.grade;
  }
  if (req.body.contact != null) {
    res.user.contact = req.body.contact;
  }
  if (req.body.contact_parent != null) {
    res.user.contact_parent = req.body.contact_parent;
  }

  try {
    const updateduser = await res.user.save();
    res.json(updateduser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// method: DELETE
// description : 고객 데이터 삭제
router.delete("/:id", getUser, async (req, res) => {
  try {
    await res.user.remove();
    res.json({ message: "회원 정보를 삭제했습니다." });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.user = user;
  next();
}

module.exports = router;
