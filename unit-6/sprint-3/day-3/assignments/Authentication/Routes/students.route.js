const express = require("express");

const {
  getStudentsData,
  postStudentsData,
} = require("../Controller/student.controller");

const studentRoute = express.Router();

studentRoute.get("/", getStudentsData);
// ------------------- async await method ---------------
// app.get("/students", async (req, res) => {
//   const results = await StudentModel.find({});
//   res.send(results);
// });

studentRoute.post("/addstudent", postStudentsData);
// ------------- .then method --------------
// app.post("/addstudent", (req, res) => {
//   const data = req.body;
//   const student = new StudentModel(data);
//   student.save().then((suc) => res.send(student));
// });

module.exports = { studentRoute };
