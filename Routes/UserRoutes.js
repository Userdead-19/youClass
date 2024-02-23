const express = require("express");
const router = express.Router();

const {
  LoginUser,
  CreateUser,
  getStudentTimeTable,
} = require("../Controllers/UserFunctions");

router.post("/login", LoginUser);

router.put("/create", CreateUser);

router.get("/getStudentTimeTable/:id", getStudentTimeTable);

module.exports = router;
