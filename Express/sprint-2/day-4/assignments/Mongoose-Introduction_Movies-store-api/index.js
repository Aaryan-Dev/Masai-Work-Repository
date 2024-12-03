const express = require("express");
const { connection, StudentModel } = require("./db");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Homepage");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About");
});

// ------------------- async await method ---------------
// app.get("/students", async (req, res) => {
//   const results = await StudentModel.find({});
//   res.send(results);
// });
// ------------------- .then method ------------------
app.get("/students", (req, res) => {
  StudentModel.find({})
    .then((success) => res.send(success))
    .catch((error) => console.log(error));
});

app.post("/addstudent", async (req, res) => {
  const data = req.body;
  const student = new StudentModel(data);
  await student.save();
  res.send(student);
});
// ------------- .then method --------------
// app.post("/addstudent", (req, res) => {
//   const data = req.body;
//   const student = new StudentModel(data);
//   student.save().then((suc) => res.send(student));
// });

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
