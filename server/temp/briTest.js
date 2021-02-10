const $db = require('../../lib/db');

(async () => {
  const data = await $db.briTest.findOne({ codedBy: '', 'coding.codedBy': { $ne: 'AY' } })
  // await $db.briTest.insertMany(data)
  console.log(data)
})()
