const mongoose = require('mongoose')

const Schema = mongoose.Schema

const rawPrimarySchoolSchema = new Schema({
  school: String,
  district: String,
  area: String,
  address: String,
  cleanAddress: Array
}, { strict: false, timestamps: true })

const rawPrimarySchool = mongoose.model('rawPrimarySchool', rawPrimarySchoolSchema)

module.exports = rawPrimarySchool
