const express = require("express");

const { getIaData, getIaByAge } = require("../Controller/ia.controller");

const iaRoute = express.Router();

iaRoute.get("/", getIaData);
// ------------------- async await method ---------------
// app.get("/students", async (req, res) => {
//   const results = await StudentModel.find({});
//   res.send(results);
// });
iaRoute.get("/:agee", getIaByAge);
// ------------- .then method --------------
// app.post("/addstudent", (req, res) => {
//   const data = req.body;
//   const student = new StudentModel(data);
//   student.save().then((suc) => res.send(student));
// });

module.exports = { iaRoute };
