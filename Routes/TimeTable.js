const express = require("express");
const router = express.Router();
const {
  CreateTimetable,
  getTimetable,
  UpdateTimetable,
} = require("../Controllers/TimetableFunctions");

router.post("/create", CreateTimetable);

router.get("/get/:id", getTimetable);

router.put("/update/:id", UpdateTimetable);

module.exports = router;
