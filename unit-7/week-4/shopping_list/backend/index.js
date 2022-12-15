const express = require("express");

// const { UserModle } = require("./Modle/User.modle");
const { BmiModle } = require("./Modle/Emi.modle");
const { markModle } = require("./Modle/bookmark.modle");
const { connection } = require("./db");
require("dotenv").config();
// const bcrypt = require("bcrypt");
// var jwt = require("jsonwebtoken");
const cors = require("cors");

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "This is Api for Shopping List App -> /addlist, getlist/, delete/, bookmark/, getbookmark"
  );
});

app.post("/addlist", async (req, res) => {
  const { title, quantity, priority, description } = req.body;
  try {
    const new_bmi = new BmiModle({
      title,
      quantity,
      priority,
      description,
    });
    await new_bmi.save();

    res.send({ msg: "Data dadded" });
  } catch (err) {
    console.log(err);
    res.send({ msg: "no" });
  }
});

app.get("/getlist", async (req, res) => {
  const bmi_data = await BmiModle.find({});

  res.send({ bmi_data });
});

app.post("/delete", async (req, res) => {
  const { id } = req.body;
  console.log(id);
  await BmiModle.deleteOne({ _id: id });

  res.send({ msg: "Book deleted successfully" });
});

app.post("/bookmark", async (req, res) => {
  const { id } = req.body;
  try {
    const bookmark = await BmiModle.findOne({ _id: id });

    console.log(bookmark);
    const data = new markModle(bookmark);

    await markModle.insertMany([data]);

    res.send({ msg: "Bookmarked successfully" });
  } catch (err) {
    // console.log(err);
    res.send(err);
  }
});

app.get("/getbookmark", async (req, res) => {
  try {
    const mark_data = await markModle.find({});
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
