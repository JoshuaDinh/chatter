const express = require("express");
const router = express.Router();
const User = require("../../models/User");
var bcrypt = require("bcryptjs");
const { findByIdAndUpdate } = require("../../models/User");

// @route Post /api/user/register
// @desc Register/create a new user account
// @access Private

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

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

// @route Put /api/user/id
// @desc Update User info
// @access Private

router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // If user updates password
    if (req.body.password) {
      try {
        // Encrypt password
        const salt = await bcrypt.genSaltSync(10);
        // Hash specific users password
        req.body.password = await bcrypt.hashSync(req.body.password, salt);
      } catch (err) {
        return res.status(500).json(err);
      }

      // Updated information
      try {
        let user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json(err);
      }
    }
  } else {
    return res.status(403).json("Please make sure you are logged in");
  }
});

// @route Deleted /api/user/id
// @desc Delete User account
// @access Private

router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // Delete account information
    try {
      let user = await User.findByIdAndDelete(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("Account has been deleted");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You can only delete your account.");
  }
});

module.exports = router;
