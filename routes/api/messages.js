const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");

// @route Post /api/messages
// @desc add a message to a conversation
// @access Private

router.post("/", async (req, res) => {
  const newMessage = new Message({
    conversationId: req.body.conversationId,
    sender: req.body.sender,
    message: req.body.message,
  });
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @route Get /api/messages
// @desc get all messages of a conversation by id
// @access Private

router.get("/:conversationId", async (req, res) => {
  try {
    const allMessages = await Message.find({
      conversationId: req.params.conversationId,
    });

    res.status(200).json(allMessages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
