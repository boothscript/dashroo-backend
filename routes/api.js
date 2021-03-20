const express = require("express");

const User = require("../models/User");
const Habit = require("../models/Habit");

const app = express();

// user crud
app.get("/user"); // List of users
app.get("/user/:id"); // User
app.post("/user/"); // Adds User
app.update("/user/:id"); // updates user
app.delete("/user/:id"); // deletes user

// habit crud
app.get("/habit/:id"); // Habit
app.post("/habit/"); // adds Habit
app.update("/habit/:id"); // updates habit
app.delete("/habit/:id"); // deletes habit

module.exports = app;
