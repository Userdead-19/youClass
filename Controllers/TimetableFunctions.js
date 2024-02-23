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
    console.log("Requested ClassName:", id);
    TimetableModal.findOne({ className: id })
      .then((timetable) => {
        if (timetable) {
          res.status(200).json({ message: "Timetable Found", timetable });
        } else {
          res.status(404).json({ message: "Timetable not found" });
        }
      })
      .catch((err) => {
        console.error("MongoDB Error:", err);
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    console.error("Internal Server Error:", err);
    res.status(500).json({ message: "Server Error" });
  }
};

const UpdateTimetable = async (req, res) => {
  const { id } = req.params;
  try {
    // Update timetable
    const timetable = await TimetableModal.findOneAndUpdate(
      { className: id },
      { $set: { TimeTable: req.body.timeTable } },
      { new: true } // Return updated document
    );

    if (!timetable) {
      return res.status(404).json({ message: "Timetable not found" });
    }

    // Update hall schedule
    const hall = await HallModal.findOneAndUpdate(
      { hallId: req.body.hallId },
      { $set: { schedule: req.body.schedule } },
      { new: true } // Return updated document
    );

    if (!hall) {
      return res.status(404).json({ message: "Hall not found" });
    }

    res.status(200).json({ message: "Timetable Updated", timetable });
  } catch (error) {
    console.error("Error updating timetable:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { CreateTimetable, getTimetable, UpdateTimetable };
