const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CommunitySchoolSchema = new Schema({
  lianjiaId: String,
  name: String,
  address: Array,
  district: String,
  area: String,
  follower: Number,
  addressName: Array,
  addressNumber: Array,
  nearPrimarySchool: String,
  nearPrimarySchoolDistance: String
}, { strict: false, timestamps: true })

const CommunitySchool = mongoose.model('CommunitySchool', CommunitySchoolSchema)

module.exports = CommunitySchool
