const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  id: Number,
  taskname: { type: String, required: true },
  status: { type: String, required: true },
  tag: { type: String, required: true },
  userId: { type: String, required: true },
});

const TodoModle = mongoose.model("todo", todoSchema);

module.exports = { TodoModle };
