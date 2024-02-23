const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({
  hallId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  block: {
    type: String,
    required: true,
  },
  floor: {
    type: Number,
    required: true,
  },
  shedule: [
    {
      day: {
        type: String,
        required: true,
      },
      sessions: {
        type: Array,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Hall", hallSchema);

/*
 hallId:"y402",
 status:"active",
 block:"y",
 floor:3,
 shedule:[
    {
        day:"monday",
        sessions:[22zG1,"0",]
    },{
        day:"tuesday",
        sessions:[22zG1,22zG2]
    }
 ]
*/
