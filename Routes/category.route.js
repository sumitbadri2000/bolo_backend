const express = require("express");
require("dotenv").config();
const { CategoryModel } = require("../Model/category.module.js");

const CategoryRouter = express.Router();

CategoryRouter.get("/", async (req, res) => {
  try {
    const ques = await CategoryModel.find();
    res.status(200).send({ message: "add chat", ques });
    console.log("res", ques);
  } catch (err) {
    res.status(401).send({
      message: "Error in your API request",
      error: err,
    });
  }
});

CategoryRouter.post("/add", async (req, res) => {
  try {
    const ques = new CategoryModel(req.body);
    await ques.save();
    res.status(200).send({ message: "ques Successfully added", ques });
  } catch (err) {
    res.status(401).send({
      message: "Error in adding",
      error: err,
    });
  }
});
module.exports = { CategoryRouter };
