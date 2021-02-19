const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ParameterSchema = new Schema({
  key: String,
  value: String
}, { strict: false, timestamps: true })

const Parameter = mongoose.model('Parameter', ParameterSchema)

module.exports = Parameter
