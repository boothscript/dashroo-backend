const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_UBI);

const Habit = mongoose.model("Habit", {
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
