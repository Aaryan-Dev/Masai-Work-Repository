const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModle = mongoose.model("user", userSchema);

module.exports = { UserModle };
