const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  ip: { type: String, required: true },
});

const UserModle = mongoose.model("User", userSchema);

module.exports = { UserModle };
