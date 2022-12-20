const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  `mongodb+srv://nobody:YIm4U2ewzxAAl4md@cluster0.il2clvz.mongodb.net/wordGame`
);

module.exports = { connection };
