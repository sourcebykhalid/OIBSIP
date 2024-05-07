const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UsersModel = require("./models/Users");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/users");

// Middleware to check if user is logged in
const isLoggedIn = (req, res, next) => {
  // Check if the user is authenticated
  if (req.headers.authorization && req.headers.authorization === "loggedIn") {
    next(); // User is logged in, continue with the request
  } else {
    res.status(401).json({ error: "Unauthorized" }); // User is not logged in
  }
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        // Set a flag indicating that the user is logged in
        res.setHeader("Authorization", "loggedIn");
        // Send the user's email or other relevant information in the response
        res.json({ email: user.email, message: "Success" });
      } else {
        res.status(401).json({ error: "Incorrect Password" });
      }
    } else {
      res.status(404).json({ error: "User does not exist" });
    }
  });
});

app.post("/register", (req, res) => {
  UsersModel.create(req.body)
    .then((user) =>
      res.json({ email: user.email, message: "Registered successfully" })
    )
    .catch((err) => res.status(500).json({ error: "Registration failed" }));
});

app.listen(3001, () => {
  console.log("Server is running");
});
