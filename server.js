const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const UserRouter = require("./Routes/UserRoutes");
const HallRouter = require("./Routes/HallRoutes");
const TimetableRouter = require("./Routes/TimeTable");

const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://admin:hello123@cluster0.obs63zv.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

app.use(morgan("dev"));
app.use(express.json());

app.use("/user", UserRouter);
app.use("/hall", HallRouter);
app.use("/timetable", TimetableRouter);

app.get("/", (req, res) => {
  res.json({ message: "This is backend SDK of youClass " });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
