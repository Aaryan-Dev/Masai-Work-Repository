const mongoose = require("mongoose");

const bmiSchema = mongoose.Schema(
  {
    userId: String,
    loan: { type: Number, required: true },
    intrest: { type: Number, required: true },
    months: { type: Number, required: true },
    emi: { type: Number, required: true },
  },
  { timestamps: true }
);

const BmiModle = mongoose.model("bmi", bmiSchema);

module.exports = { BmiModle };
