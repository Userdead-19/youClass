const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({
  className: {
    type: String,
    required: true,
  },
  TimeTable: [
    {
      day: {
        type: String,
        required: true,
      },
      Halls: {
        type: Array,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Timetable", timetableSchema);

/*
  ClassName:"22zG1",
  TimeTable:[
    {
        day:"monday",
        Halls:[y401,NULL]
    },{
        day:"tuesday",
        Halls:[]
    }
  ]
*/
