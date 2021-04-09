const _ = require('lodash')
const $db = require('../../lib/db');

(async () => {
  const res = await $db.bri.find({ specificProjects: { $nin: ['', '0', 0] } }).select('title stockName sourceYear actualParticipated specificProjects locationMentioned comment subsidyAmount')
  // await $db.briTest.insertMany(data)
  console.log(Object.keys(_.groupBy(res, 'sourceYear')))
  const arr = {
    2016: 354,
    2017: 481,
    2018: 430,
    2019: 378
  }
  let i = 0
  _.forEach(_.groupBy(res, 'sourceYear'), (item, key) => {
    console.log(i++, key, Object.keys(_.groupBy(item, 'stockName')).length)
  })
  // _.forEach(_.groupBy(res, 'stockName'), (item, key) => console.log(key, item.length))
  // for (const item of res) {
  //   // console.log(item)
  //
  //   if (item.actualParticipated === null && item.comment?.length > 0) {
  //     // await $db.bri.findOneAndUpdate({ _id: item._id }, { actualParticipated: 1 })
  //   }
  //
  //   // let actualParticipated = item.actualParticipated
  //   // if (item.actualParticipated === '1') { actualParticipated = 1 }
  //   // if (item.actualParticipated === '0') { actualParticipated = 0 }
  //   // const r = await $db.bri.findOneAndUpdate({ _id: item._id }, { actualParticipated })
  //   // console.log(r)
  // }
  process.exit(0)
})()
