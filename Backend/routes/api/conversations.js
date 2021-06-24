const express = require("express");
const router = express.Router();
const Conversation = require("../../models/Conversations");

router.get("/", (req, res) => {
  res.status(200).send("connected");
});

module.exports = router;
