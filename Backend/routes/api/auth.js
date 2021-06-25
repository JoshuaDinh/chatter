const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User");

// @route Post /api/register
// @desc Register/create a new user account
// @access Private

router.post("/register", async (req, res) => {
  try {
    const user = await new User({
      username: "josh",
      email: "joshuadinh@gmail.com",
      password: "123456",
    });

    // Check if username already exists
    if ((user.username = user.username)) {
      res.status(400).json("user exists");
    }

    await user.save();
    res.send("ok");
  } catch (err) {
    res.status(500).json("failed");
  }
});

module.exports = router;
