const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { UserModel } = require("./models/userModel");
const { adminModel } = require("./models/adminModel");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require("mongoose");

app.get("/user", async (req, res) => {
  const { user } = req.query;
  try {
    const fields = await UserModel.find({ user });
    return res.status(200).json(fields);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

app.get("/admin", async (req, res) => {
  const { admin } = req.query;
  try {
    const fields = await UserModel.find({ admin });
    return res.status(200).json(fields);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

app.post("/user", async (req, res) => {
  try {
    let field = new UserModel(req.body);
    await field.save();
    res.send({
      message: "field added",
      status: 1,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

app.post("/admin", async (req, res) => {
  try {
    let field = new adminModel(req.body);
    await field.save();
    res.send({
      message: "field added",
      status: 1,
    });
  } catch (error) {
    res.send({
      message: error.message,
      status: 0,
    });
  }
});

app.listen(4000, async () => {
  try {
    await connection;
    console.log("database is connected");
  } catch (error) {
    console.log(error);
  }
  console.log("server is running on port", 4000);
});
