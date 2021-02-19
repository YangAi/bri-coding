require('../env')
const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' })
const mongoose = require('mongoose')
const bri = require('./model/bri')
const briTest = require('./model/briTest')
const parameter = require('./model/parameter')
console.log(process.env.VUE_APP_MONDO_DB_PATH)
mongoose.connect(process.env.VUE_APP_MONDO_DB_PATH, {
  auth: { authSource: 'admin' },
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

module.exports = {
  bri,
  briTest,
  parameter
}
