const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");

router.get("/", (req, res) => {
  res.status(200).send("connected");
});

module.exports = router;
