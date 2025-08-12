// const mongoose = require("mongoose");

// const EventSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, "Event title is required"],
//   },
//   shortDescription: {
//     type: String,
//     required: [true, "Event short description is required"],
//   },
//   longDescription: {
//     type: String,
//     required: [true, "Event long description is required"],
//   },
//   pic: {
//     type: String,
//     required: [true, "Event picture is required"],
//   },
//   date: {
//     type: Date,
//     required: [true, "Event date is required"],
//   },
//   // time : {
//   //     type : String,
//   //     required : [true, "Event time is required"]
//   // },
//   active: {
//     type: Boolean,
//     default: true,
//   },
//   createdBy: {
//     type: String,
//   },
//   updatedBy: []
// }, { timestamps: true });

// const Event = mongoose.model("Event", EventSchema)
// module.exports = Event
// // This model is used to store events in the database

const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Event Title Must Required"]
    },
    shortDescription: {
        type: String,
        required: [true, "Event Short Description Must Required"]
    },
    longDescription: {
        type: String,
        required: [true, "Event Description Must Required"]
    },
    pic: {
        type: String,
        required: [true, "Event Pic Must Required"]
    },
    date: {
        type: Date,
        required: [true, "Event Date Must Required"]
    },
    active: {
        type: Boolean,
        default: true
    },
    createBy: {
        type: String
    },
    updateBy: []
}, { timestamps: true })

const Event = new mongoose.model("Event", EventSchema)

module.exports = Event