const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaEvent = new Schema({
 Eventname: String,
 date: Date,
 EventType: String,
 desc : String,
 NumPlaceTotal: Number,
 NumPlaceRest: Number,
 numberTickedispo:Array,
 Prix: String,
 Eventimage: String,
 id_User: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "user"
 },
 
})


module.exports = mongoose.model('Event', SchemaEvent)