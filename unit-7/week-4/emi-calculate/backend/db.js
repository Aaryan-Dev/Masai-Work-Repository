const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  `mongodb+srv://nobody:${process.env.MONGO_PASSWORD}@cluster0.il2clvz.mongodb.net/bmi`
);

module.exports = { connection };
