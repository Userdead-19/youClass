const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({});

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
