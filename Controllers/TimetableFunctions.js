const HallModal = require("../modals/HallModal");
const TimetableModal = require("../modals/TimetableModal");
const hallSchema = require("../modals/HallModal");

const CreateTimetable = async (req, res) => {
  try {
    TimetableModal.create(req.body)
      .then((timetable) => {
        res.status(200).json({ message: "Timetable Created", timetable });
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    console.log(err);
    res.json({ message: "Server Error" });
  }
};

const getTimetable = async (req, res) => {
  const { id } = req.params;
  try {
    TimetableModal.findOne({ ClassName: id })
      .then((timetable) => {
        if (timetable) {
          res.status(200).json({ message: "Timetable Found", timetable });
        } else {
          res.status(404).json({ message: "Timetable not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    res.json({ message: "Server Error" });
  }
};

const UpdateTimetable = async (req, res) => {
  const { id } = req.params;
  try {
    TimetableModal.findOneAndUpdate({ ClassName: id }, req.body.timetable)
      .then((timetable) => {
        if (timetable) {
          HallModal.findOneAndUpdate(
            { hallId: req.body.hallId },
            {
              schedule: req.body.schedule,
            }
          ).then((hall) => {
            if (hall) {
              res.status(200).json({ message: "Timetable Updated", timetable });
            } else {
              res.status(404).json({ message: "Hall not found" });
            }
          });
        } else {
          res.status(404).json({ message: "Timetable not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    res.json({ message: "Server Error" });
  }
};

module.exports = { CreateTimetable, getTimetable, UpdateTimetable };
