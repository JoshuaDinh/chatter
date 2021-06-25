const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    avatar: {
      type: String,
      default: true,
    },
    friends: {
      type: Array,
      default: [],
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("User", UserSchema);
