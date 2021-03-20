const mongoose = require("mongoose");
const { Schema, model } = mongoose;

mongoose.connect(process.env.DATABASE_UBI);

const habitSchema = new Schema({
  user: String,
  name: String,
  color: Number,
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
