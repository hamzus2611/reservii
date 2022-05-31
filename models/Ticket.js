const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SchemaTicket = new Schema({
   TicketNum: Number,
   Date: Date,
   id_Event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event"
   },
   id_User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
   }

})

module.exports = mongoose.model('ticket', SchemaTicket)