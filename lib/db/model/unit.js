const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PropertySchema = new Schema({
  houseProjectName: String,
  houseSize: Number,
  blurredFloor: String
}, { strict: false, timestamps: true })

const Unit = mongoose.model('Sh.House.Unit', PropertySchema)

module.exports = Unit
