const mongoose = require('mongoose')

const Schema = mongoose.Schema

const MentionSchema = new Schema({
  policyTitle: String,
  sourceType: String,
  sourceYear: Number,
  title: String,
  stockCode: String,
  stockName: String,
  parentIndustry: String,
  industry: String,
  provinces: String,
  actualControllerType: String,
  link: String,
  comment: String,
  location: String,
  codedBy: String,
  section: String,
  length: Number,
  docLink: String,
  mentionPrevious: String,
  mention: String,
  mentionNext: String,
  actualParticipated: String,
  specificProjects: String,
  subsidyAmounts: String,
  locationMentioned: String,
  coding: Array
}, { strict: false, timestamps: true })

const Mention = mongoose.model('Mention.BRI.Test', MentionSchema)

module.exports = Mention
