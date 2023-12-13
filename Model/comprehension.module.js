const mongoose = require("mongoose");

const ComprehensionSchema = mongoose.Schema(
  {
    para: { type: String },
    opt1: { type: String },
    opt2: { type: String },
    opt3: { type: String },
    opt4: { type: String },
  },
  {
    versionKey: false,
  }
);

const ComprehensionModel = mongoose.model("question", ComprehensionSchema);

module.exports = { ComprehensionModel };
