// 把之前三个人的bri测试数据导入回主要库

(async () => {
  const $db = require('../lib/db')
  await $db.parameter.insertMany([{
    key: 'version',
    value: 'v1.0.0'
  }])
  return
  const tests = await $db.briTest.find()
  for (const test of tests) {
    await $db.bri.findOneAndUpdate({
      title: test.title,
      mention: test.mention
    }, {
      actualControllerType: test.actualControllerType,
      specificProjects: test.specificProjects,
      subsidyAmounts: test.subsidyAmounts,
      comment: test.comment,
      codedBy: test.codedBy
    })
    console.log(test.title)
  }
  console.log('--finished')
  process.exit(0)
})()
