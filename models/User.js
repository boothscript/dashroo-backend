const mongoose = require("mongoose");
const { Schema, model } = mongoose;

mongoose.connect(process.env.DATABASE_UBI);

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
