const express = require("express");
const router = express.Router();
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middleware/token");
const { check, validationResult } = require("express-validator");

// @route Post /api/user/register
// @desc Register/create a new user account
// @access Private

router.post(
  "/register",
  [
    check("username", "username is required").not().isEmpty(),
    check("email", "Please include a valid Email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(500).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

    try {
      // See if user exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(500).json({ error: "Email already exists" });
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
          res.json({ success: true, token: "Bearer", token });
        }
      );
    } catch (err) {
      res.status(500).send("server error");
    }
  }
);

// @route Put /api/user/id
// @desc Update User info
// @access Private

router.put("/:id", auth, async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // If user updates password
    if (req.body.password) {
      try {
        // Encrypt password
        const salt = await bcrypt.genSaltSync(10);
        // Hash specific users password
        req.body.password = await bcrypt.hashSync(req.body.password, salt);
      } catch (err) {
        return res.status(500).json({ err });
      }

      // Updated information
      try {
        let user = await User.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
        res.status(200).json("Account has been updated");
      } catch (err) {
        return res.status(500).json({ err });
      }
    }
  } else {
    return res
      .status(403)
      .json({ error: "Please make sure you are logged in" });
  }
});

// @route Deleted /api/user/id
// @desc Delete User account
// @access Private

router.delete("/:id", auth, async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    // Delete account information
    try {
      let user = await User.findByIdAndDelete(req.params.id, {
        $set: req.body,
      });
      res.status(200).json({ error: "Account has been deleted" });
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json({ error: "You can only delete your account" });
  }
});

// @route Get /api/user/:id
// @desc Get account information by _userId
// @access Private

router.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    const { password, id, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// @route Add Friend /api/user/:id
// @desc Add User as friend
// @access Private

router.put("/:id/addFriend", async (req, res) => {
  // Check if user is the same
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      // If user is not already friends update schema
      if (!user.friendsList.includes(req.body.userId)) {
        await user.updateOne({ $push: { friendsList: currentUser._id } });
        await currentUser.updateOne({
          $push: { friendsList: user._id },
        });
        res.status(200).json({ success: "Account has been added as a friend" });
      } else {
        res.status(403).json("You are already friends");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json({ error: "You cant add your self as a friend" });
  }
});

// @route Remove a Friend /api/user/id/deleteFriend
// @desc  Remove a User as friend
// @access Private

router.put("/:id/deleteFriend", async (req, res) => {
  // Check if user is the same
  if (req.body.userId !== req.params.id) {
    try {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      // If user is currently a friend update schema
      if (user.friendsList.includes(req.body.userId)) {
        await user.updateOne({ $pull: { friendsList: currentUser._id } });
        await currentUser.updateOne({
          $pull: { friendsList: user._id },
        });
        res
          .status(200)
          .json({ error: "Account has been removed from friends" });
      } else {
        res.status(403).json({ error: "You can not unfriend your self" });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    res.status(403).json({ error: "You cant add your self as a friend" });
  }
});

// @route Get /api/user
// @desc Search All Users in DB
// @access Public

router.get("/", async (req, res) => {
  try {
    const user = await User.find({}).select(["_id", "username", "email"]);
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
