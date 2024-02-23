const mongoose = require("mongoose");

const timetableSchema = new mongoose.Schema({});

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
