const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_UBI);

const User = mongoose.model("User", {
  username: String,
  firstName: String,
  email: String,
  avatar: String,
  habits: [String],
  journals: [String],
  stacks: [String],
});
