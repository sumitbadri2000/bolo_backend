const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  {
    quest: { type: String },
  },
  {
    versionKey: false,
  }
);

const CategoryModel = mongoose.model("question", CategorySchema);

module.exports = { CategoryModel };
