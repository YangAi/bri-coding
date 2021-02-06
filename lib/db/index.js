require('../env')
const mongoose = require('mongoose')
const bri = require('./model/bri')

mongoose.connect(process.env.VUE_APP_MONDO_DB_PATH, {
  auth: { authSource: 'admin' },
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

module.exports = {
  bri
}
