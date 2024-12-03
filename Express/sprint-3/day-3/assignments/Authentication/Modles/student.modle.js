const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  id: Number,
  age: Number,
  name: { type: String, required: true },
});

const Student = mongoose.model("student", studentSchema);

module.exports = { Student };
