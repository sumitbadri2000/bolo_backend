const express = require("express");
require("dotenv").config();
const { ComprehensionModel } = require("../Model/comprehension.module.js");

const ComprehensionRouter = express.Router();

ComprehensionRouter.get("/", async (req, res) => {
  try {
    const comprehension = await ComprehensionModel.find();
    res.status(200).send({ message: "add comprehension", comprehension });
    console.log("res", comprehension);
  } catch (err) {
    res.status(401).send({
      message: "Error in your API request",
      error: err,
    });
  }
});

ComprehensionRouter.post("/add", async (req, res) => {
  try {
    const comprehension = new ComprehensionModel(req.body);
    await comprehension.save();
    res
      .status(200)
      .send({ message: "comprehension Successfully added", comprehension });
  } catch (err) {
    res.status(401).send({
      message: "Error in adding",
      error: err,
    });
  }
});
module.exports = { ComprehensionRouter };
