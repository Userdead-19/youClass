const hallSchema = require("../modals/HallModal");

const CreateHall = async (req, res) => {
  try {
    hallSchema
      .create(req.body)
      .then((hall) => {
        res.status(200).json({ message: "Hall Created", hall });
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    res.json({ message: "Server Error" });
    console.log(err);
  }
};

const getHall = async (req, res) => {
  const { id } = req.params;
  try {
    hallSchema
      .findOne({ hallId: id })
      .then((hall) => {
        if (hall) {
          res.status(200).json({ message: "Hall Found", hall });
        } else {
          res.status(404).json({ message: "Hall not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    res.json({ message: "Server Error" });
  }
};

const UpdateHall = async (req, res) => {
  const { id } = req.params;
  try {
    hallSchema
      .findOneAndUpdate(
        { hallId: id },
        { $set: { schedule: req.body.schedule } }
      )
      .then((result) => {
        if (result) {
          res.status(200).json({ message: "Hall Updated", result });
        } else {
          res.status(404).json({ message: "Hall not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    res.json({ message: "Server Error" });
  }
};

module.exports = { CreateHall, getHall, UpdateHall };
