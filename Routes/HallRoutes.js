const router = require("express").Router();

const {
  CreateHall,
  getHall,
  UpdateHall,
} = require("../Controllers/HallFunctions");

router.post("/create", CreateHall);
router.get("/get/:id", getHall);
router.put("/update/:id", UpdateHall);

module.exports = router;
