const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema(
  {
    userId: String,
    bmi: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
  },
  { timestamps: true }
);

const BmiModle = mongoose.model("bmi", bmiSchema);

module.exports = { BmiModle };
