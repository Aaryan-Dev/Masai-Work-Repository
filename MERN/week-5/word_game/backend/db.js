const mongoose = require("mongoose");

require("dotenv").config();

const connection = mongoose.connect(
  `mongodb+srv://nobody:${password}@cluster0.il2clvz.mongodb.net/wordGame`
);

module.exports = { connection };
