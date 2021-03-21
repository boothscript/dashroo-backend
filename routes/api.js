const express = require("express");

const User = require("../models/User");
const Habit = require("../models/Habit");

const app = express();

// ----- USER CRUD -----

// Get All Users
app.get("/user", (req, res) => {
  User.find()
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => res.status(500).send({ error: err }));
});

// Get User By ID
app.get("user/:id", (req, res) => {
  User.find({ _id: req.params.id })
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => res.status(500).send({ error: err }));
});

app.post("/user/", (req, res) => {
  console.log(req.body);
  User.create(req.body).then((user) => {
    res.send({ message: "Success", id: user._id });
  });
});
app.put("/user/:id"); // updates user
app.delete("/user/:id"); // deletes user

// habit crud
app.get("/habit/:id"); // Habit
app.post("/habit/"); // adds Habit
app.put("/habit/:id"); // updates habit
app.delete("/habit/:id"); // deletes habit

module.exports = app;
