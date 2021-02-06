const mongoose = require('mongoose')

const Schema = mongoose.Schema

const DistrictSchema = new Schema({
  name: String,
  url: String
}, { strict: false, timestamps: true })

const District = mongoose.model('District', DistrictSchema)

module.exports = District
