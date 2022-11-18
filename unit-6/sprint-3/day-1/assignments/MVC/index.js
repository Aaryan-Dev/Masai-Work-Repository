const express = require("express");
const { connection } = require("./Config/db");

const { studentRoute } = require("./Routes/students.route");
const { iaRoute } = require("./Routes/ia.route");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About");
});

app.use("/students", studentRoute);
app.use("/ias", iaRoute);

app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected to DB Successfully");
  } catch (err) {
    console.log("Error connecting to db");
    console.log(err);
  }
  console.log("Listening at 8080");
});
