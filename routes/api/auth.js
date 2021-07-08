const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/token");

// @route Post /api/auth
// @desc Login user & get token
// @access Public

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check database for Users email
    let user = await User.findOne({ email });
    if (!user) {
      res
        .status(404)
        .json(
          "Invalid Credentials, please check that your email & password are correct"
        );
    }

    // Compare user password with hashed password from database
    const validatePassword = await bcrypt.compare(password, user.password);
    !validatePassword &&
      res
        .status(400)
        .json(
          "Invalid Credentials, please  check that your email & password are correct"
        );

    // Json WebToken
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ success: true, token: "Bearer", token });
      }
    );
  } catch (err) {
    res.status(500).json({ err });
  }
});

// @route Get /api/auth
// @desc
// @access Public

router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

module.exports = router;
