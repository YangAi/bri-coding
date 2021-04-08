const $db = require('../../lib/db');

(async () => {
  const res = await $db.bri.find().select('actualParticipated specificProjects locationMentioned comment subsidyAmount')
  // await $db.briTest.insertMany(data)
  for (const item of res) {
    if (item.actualParticipated === null && item.comment?.length > 0) {
      console.log(item)
      // await $db.bri.findOneAndUpdate({ _id: item._id }, { actualParticipated: 1 })
    }

    // let actualParticipated = item.actualParticipated
    // if (item.actualParticipated === '1') { actualParticipated = 1 }
    // if (item.actualParticipated === '0') { actualParticipated = 0 }
    // const r = await $db.bri.findOneAndUpdate({ _id: item._id }, { actualParticipated })
    // console.log(r)
  }
  process.exit(0)
})()
