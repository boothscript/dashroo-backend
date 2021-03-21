// script to populate db. Does not exit on its own
//TODO: kill process

const User = require("../../models/User");
const Habit = require("../../models/Habit");
const { connect } = require("../index");

const users = require("./users.js");
const habits = require("./habits.js");

connect();

let userIds;

User.insertMany(users, (err, obj) => {
  if (err) {
    console.log("$$$error", err);
  } else {
    console.log("Users added:", obj.length);
    userIds = obj.map((user) => user._id);
    const addHabits = userIds.forEach((userId) => {
      console.log(`adding habits for ${userId}`);

      try {
        Habit.insertMany(habits, (err, obj) => {
          if (err) {
            console.log(`ERROR: ${err}`);
          } else {
            console.log("added habits", obj.length);
            const habitIds = obj.map((habit) => habit._id);
            habitIds.forEach(async (habitId) => {
              const user = await User.findOne({ _id: userId });
              user.habits.push(habitId);
              user.save();
              console.log(`added habit ${habitId} for user ${userId}`);
            });
          }
        });
      } catch {
        console.log(
          `error completing habit inserts for user with id: ${userId}`
        );
      }
    });
  }
});
