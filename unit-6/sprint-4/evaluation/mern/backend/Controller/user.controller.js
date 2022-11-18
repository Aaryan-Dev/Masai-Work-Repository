// app
const express = require("express");
const app = express();
app.use(express.json());

const { TodoModle } = require("../modles/Todo.modle");
const { UserModle } = require("../modles/User.modle");
// npms
// const cors = require("cors");
// app.use(cors());
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const signup = async (req, res) => {
  const { email, password } = req.body;

  const exists = await UserModle.findOne({ email });
  if (exists) {
    res.send({ msg: "User Exists" });
  } else {
    bcrypt.hash(password, 6, async function (err, hash) {
      if (err) {
        res.send({ msg: "somthing went wrong" });
      } else {
        const new_user = new UserModle({
          email,
          password: hash,
          ip: req.socket.remoteAddress,
        });
        await new_user.save();
        res.send({ msg: "signed up successfully" });
      }
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const userdata = await UserModle.findOne({ email });
  const hashed_password = userdata.password;
  const user_id = userdata._id;

  bcrypt.compare(password, hashed_password, function (err, result) {
    if (result) {
      var token = jwt.sign(
        { userId: user_id, email: email },
        process.env.JWT_KEY
      );

      res.send({ msg: `token ${token}` });
    } else {
      res.send({ msg: "wrong password or email" });
    }
  });
};

module.exports = { signup, login };
