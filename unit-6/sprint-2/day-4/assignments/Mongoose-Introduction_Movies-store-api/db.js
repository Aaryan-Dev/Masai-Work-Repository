const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://127.0.0.1:27017/web24");

const studentSchema = mongoose.Schema({
  name: String,
  age: Number,
  course: String,
});

const StudentModel = mongoose.model("students", studentSchema);

module.exports = {
  connection,
  StudentModel,
};
