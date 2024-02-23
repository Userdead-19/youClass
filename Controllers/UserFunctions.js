const userSchema = require("../modals/UserModal");
const timetableSchema = require("../modals/TimetableModal");

const LoginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    userSchema
      .findOne({ IDNO: username })
      .then((user) => {
        if (user) {
          if (user.password === password) {
            res.status(200).json({ message: "Login Successful", user });
          } else {
            res.status(401).json({ message: "Invalid Password" });
          }
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    console.log(err);
    res.json({ message: "Server Error" });
  }
};

const CreateUser = async (req, res) => {
  try {
    userSchema
      .create(req.body)
      .then((user) => {
        res.status(200).json({ message: "User Created", user });
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (error) {
    console.log(err);
  }
};

const getStudentTimeTable = async (req, res) => {
  const { id } = req.params;
  try {
    userSchema
      .findOne({ IDNO: id })
      .then((user) => {
        if (user) {
          if (user.StudentTimeTableId) {
            console.log(user);
            timetableSchema
              .findOne({ className: user.StudentTimeTableId })
              .then((timetable) => {
                if (timetable) {
                  res
                    .status(200)
                    .json({ message: "TimeTable Found", timetable });
                } else {
                  res.status(404).json({ message: "TimeTable not found" });
                }
              })
              .catch((err) => {
                res.status(500).json({ message: "Server Error" });
              });
          }
        } else {
          res.status(404).json({ message: "User not found" });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Server Error" });
      });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { LoginUser, CreateUser, getStudentTimeTable };
