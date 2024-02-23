const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({});

module.exports = mongoose.model("User", userSchema);

/*
  name:"John Doe",
  email:"",
  password:"",
  role:"student",
  department:"cse",
  IDNO:"123456",
  StudentTimeTableId:"",
*/
