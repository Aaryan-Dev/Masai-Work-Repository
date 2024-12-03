const mongoose = require("mongoose");

const UserModelSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const UserModel = mongoose.model("user", UserModelSchema);

module.exports = { UserModel };
