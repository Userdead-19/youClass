const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:hello123@cluster0.obs63zv.mongodb.net/",
  {}
);
