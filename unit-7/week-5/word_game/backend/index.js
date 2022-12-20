const express = require("express");

// const { UserModle } = require("./Modle/User.modle");
const { BmiModle } = require("./Modle/user.modle");
var jwt = require("jsonwebtoken");
const { connection } = require("./db");
require("dotenv").config();
var randomWords = require("random-words");
// const bcrypt = require("bcrypt");
// var jwt = require("jsonwebtoken");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "This is Api for MASAI WORD GAME -> (POST - /adduser), (GET - /playzone, /getuser)"
  );
});

app.post("/adduser", async (req, res) => {
  const { name, difficulty } = req.body;
  try {
    const new_bmi = new BmiModle({
      name,
      difficulty,
    });
    await new_bmi.save();

    var token = jwt.sign({ Name: name, Diff: difficulty }, "qwert12345");
    res.send({ msg: `Token ${token}` });
  } catch (err) {
    res.send({ msg: err });
  }
});

app.get("/playzone", async (req, res) => {
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    var decoded = jwt.verify(token, "qwert12345");

    let user_name = decoded.Name;
    let user_diff = decoded.Diff;
    let random = randomWords();

    res.send({ user_name, user_diff, random });
  } catch (err) {
    res.send({ msg: err });
  }
});

app.get("/getuser", async (req, res) => {
  try {
    const mark_data = await BmiModle.find({});
    res.send({ mark_data });
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, async () => {
  try {
    await connection;
  } catch (err) {
    console.log(err);
  }

  console.log("Active");
});
