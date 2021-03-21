const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  firstName: String,
  email: String,
  avatar: String,
  habits: [String],
  journals: [String],
  stacks: [String],
});

const User = model("User", userSchema);
module.exports = User;
