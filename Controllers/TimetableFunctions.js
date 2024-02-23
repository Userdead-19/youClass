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
    console.log("Requested ClassName:", id); // Add this line for debugging
    TimetableModal.findOne({ className: id })
      .then((timetable) => {
        if (timetable) {
          res.status(200).json({ message: "Timetable Found", timetable });
        } else {
          res.status(404).json({ message: "Timetable not found" });
        }
      })
      .catch((err) => {
        console.error("MongoDB Error:", err); // Add this line for debugging
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    console.error("Internal Server Error:", err); // Add this line for debugging
    res.status(500).json({ message: "Server Error" });
  }
};
const UpdateTimetable = async (req, res) => {
  const { id } = req.params;
  const { day, Halls } = req.body.timetable;

  try {
    // Find the timetable document for the specified class
    const timetable = await TimetableModal.findOne({ className: id });

    if (!timetable) {
      return res.status(404).json({ message: "Timetable not found for class" });
    }

    // Find the index of the day within the TimeTable array
    const dayIndex = timetable.TimeTable.findIndex((item) => item.day === day);

    if (dayIndex === -1) {
      return res.status(404).json({ message: "Day not found in timetable" });
    }

    console.log("Day index:", dayIndex);
    // Update the Halls array for the specified day
    timetable.TimeTable[dayIndex].Halls = Halls;

    // Save the updated timetable document
    const updatedTimetable = await timetable.save();

    res
      .status(200)
      .json({ message: "Timetable updated", timetable: updatedTimetable });
  } catch (error) {
    console.error("Error updating timetable:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { CreateTimetable, getTimetable, UpdateTimetable };
