const mongoose = require("mongoose");

// .env starts ---
require("dotenv").config();
const password = process.env.CLASSIFIED_INFO;
// ends ---

console.log(password);

const connection = mongoose.connect(
  `mongodb+srv://nobody:${password}@cluster0.ux7pwd1.mongodb.net/web24`
);

module.exports = {
  connection,
};
