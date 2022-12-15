const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  `mongodb+srv://nobody:YIm4U2ewzxAAl4md@cluster0.il2clvz.mongodb.net/note`
  // "mongodb+srv://surya:surya123@cluster0.egl1mnc.mongodb.net/MOCK10"
);

module.exports = { connection };
