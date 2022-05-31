const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const SchemaUser = new Schema({
 Username: String,
 Lastname: String,
 Email: String,
 Phone: String,
 Password: String,
 isActivated: Boolean,
 UserRole: {
  type: String,
  default: 'Client',
  roles: ["Client", "Organisateur", "Admin"]
 }
})
module.exports = mongoose.model('user', SchemaUser)