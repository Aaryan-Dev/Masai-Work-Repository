const mongoose = require("mongoose");

const iaSchema = mongoose.Schema({
  id: String,
  age: String,
});

const Ia = mongoose.model("ia", iaSchema);

module.exports = { Ia };
