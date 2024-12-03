const mongoose = require("mongoose");

// - Title of Item.
// - Quantity.
// - Priority.
// - Date and timestamp
// - Description.

const bmiSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    difficulty: { type: String, required: true },
  },
  { timestamps: true }
);

const BmiModle = mongoose.model("playzone", bmiSchema);

module.exports = { BmiModle };
