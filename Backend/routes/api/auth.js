const express = require("express");
const router = express.Router();
const User = require("../../models/User");
var bcrypt = require("bcryptjs");

// @route Post /api/auth
// @desc Login/Authenticate User
// @access Private

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check database for Users email
    let user = await User.findOne({ email });
    if (!user) {
      res
        .status(404)
        .json(
          "Invalid Credentials, please  check that your username & password are correct"
        );
    }

    // Compare user password with hashed password from database
    const validatePassword = await bcrypt.compare(password, user.password);
    !validatePassword &&
      res
        .status(400)
        .json(
          "Invalid Credentials, please  check that your username & password are correct"
        );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
