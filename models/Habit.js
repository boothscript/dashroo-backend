const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const habitSchema = new Schema({
  user: String,
  name: String,
  color: String,
  availability: [Boolean],
  currentTarget: Number,
  records: [
    {
      week: Number,
      year: Number,
      record: [Boolean],
      weeksTarget: Number,
    },
  ],
});

const Habit = model("Habit", habitSchema);
module.exports = Habit;
