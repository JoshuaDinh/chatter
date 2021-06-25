const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../../models/User");
var bcrypt = require("bcryptjs");

// @route Post /api/register
// @desc Register/create a new user account
// @access Private

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // See if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    //Create User instance
    user = new User({
      username,
      email,
      password,
    });

    // Encrypt password
    const salt = await bcrypt.genSaltSync(10);
    // Hash specific users password
    user.password = await bcrypt.hashSync(password, salt);

    // Save new user to database
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json("failed");
  }
});

module.exports = router;
