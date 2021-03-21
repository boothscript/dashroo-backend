const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/dashroo";
const connect = () => {
  console.log("CONNECTING TO DB");
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (!err) {
        console.log("Connection Successful");
      } else {
        console.log("$$$use test Error Connecting", err);
      }
    }
  );
};

module.exports = { connect };
