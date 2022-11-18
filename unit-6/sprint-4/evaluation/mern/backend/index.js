// express
const express = require("express");

// connection
const { connection } = require("./db");

// app
const app = express();
app.use(express.json());

// npms
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
app.use(cors());

//controller
const { signup, login } = require("./Controller/user.controller");

// getRoutes
const { todoRouter } = require("./Routes/todo.route");

// Routes
app.get("/", (req, res) => {
  res.send(
    "This is Api for Todo List" +
      "<br>" +
      "<br>" +
      "Sign Up ---> /signup" +
      "<br>" +
      "Login ---> /login" +
      "<br>" +
      "<br>" +
      "Add todos ---> /addTodos?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZDE2NDU0MzhkMDdhMmRhMGM4MDIiLCJlbWFpbCI6InllcyIsImlhdCI6MTY2NzgxMzc1MH0.dX9_fLpkT0O03-R7T0kbFfaEdB2s_VhlrcUuy10tpAI" +
      "<br>" +
      "<br>" +
      "Get Your todos ---> /todos?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzY4ZDE2NDU0MzhkMDdhMmRhMGM4MDIiLCJlbWFpbCI6InllcyIsImlhdCI6MTY2NzgxMzc1MH0.dX9_fLpkT0O03-R7T0kbFfaEdB2s_VhlrcUuy10tpAI"
  );
});

// SignUp
app.post("/signup", signup);

// LogIn
app.post("/login", login);

//todo CURD
app.use("/todos", todoRouter);

// port
const port = process.env.PORT || 8080;

// listening
app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }
  console.log("Active");
});
