const express = require("express");
const router = express.Router();

const users = {
  id: 1,
  fullName: "Santiago",
  email: "santiago@gmail.com",
  password: "Santi12345",
  passwordR: "Santi12345",
};

router.get("/", (req, res) => {
  res.status(200).send(users);
});

router.post("/postUser", (req, res) => {
  res.status(200).send(users);
});

module.exports = router;
