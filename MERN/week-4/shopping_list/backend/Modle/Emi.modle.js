const mongoose = require("mongoose");

// - Title of Item.
// - Quantity.
// - Priority.
// - Date and timestamp
// - Description.

const bmiSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: String, required: true },
    priority: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const BmiModle = mongoose.model("note", bmiSchema);

module.exports = { BmiModle };
