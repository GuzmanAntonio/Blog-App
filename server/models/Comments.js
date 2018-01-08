const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comments = new Schema({
  userName: {type: String, required: true},
  img: {type: String, required: true},
  comment: {type: String, required: true},
  location: {type: String, required: true}
})

module.exports = mongoose.model('Comments', Comments)
