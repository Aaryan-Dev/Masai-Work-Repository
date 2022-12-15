const mongoose = require("mongoose");

// - Title of Item.
// - Quantity.
// - Priority.
// - Date and timestamp
// - Description.

const markSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: String, required: true },
    priority: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const markModle = mongoose.model("mark", markSchema);

module.exports = { markModle };
