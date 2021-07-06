const express = require("express");
const router = express.Router();
const Conversation = require("../../models/Conversations");

// @route Post /api/conversations
// @desc Create new conversation
// @access Private

router.post("/", async (req, res) => {
  // Create new conversation object
  const newConversation = await new Conversation({
    members: [req.body.senderId, req.body.recieverId],
  });
  // save conversation to db
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// @route Get /api/conversations/userId
// @desc get conversation of user
// @access Private

router.get("/:userId", async (req, res) => {
  try {
    const conversation = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
