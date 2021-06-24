const express = require("express");
const router = express.Router();
const User = require("../../models/User");

// @route User /api/user
// @desc
// @access Private

router.get("/", (req, res) => {
  res.status(200).json("user route");
});

module.exports = router;
