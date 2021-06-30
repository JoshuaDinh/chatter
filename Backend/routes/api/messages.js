const express = require("express");
const router = express.Router();
const Message = require("../../models/Message");

// @route Post /api/messages
// @desc add a message to a conversation
// @access Private

router.post("/", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @route Get /api/messages
// @desc get all messages of a conversation
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
