const { Router } = require('express')
const bodyParser = require('body-parser')
const $db = require('../../lib/db')
const { apiResponse } = require('../utils/response')
const { uniq } = require('lodash')

const router = Router()
router.get('/bri', async (req, res, next) => {
  try {
    const pn = req.query.pn || 1
    const output = await $db.bri.find().limit(100).skip((pn - 1) * 100)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

router.get('/bri/new', async (req, res, next) => {
  try {
    const exclude = req.query.exclude || undefined
    const output = await $db.bri.findOne({ codedBy: '', _id: { $ne: exclude } }).skip(1000)
    // output = output.toObject()
    output.mentionPrevious = highlight(output.mentionPrevious)
    const mention = highlightAll(output.mention)
    output.mention = mention.text
    output.locationMentioned = mention.locationMentioned
    output.mentionNext = highlight(output.mentionNext)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})
router.get('/bri/:id', async (req, res, next) => {
  try {
    const output = await $db.bri.findOne({ _id: req.params.id })
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

router.put('/bri/:id', bodyParser.json(), async (req, res, next) => {
  try {
    const output = await $db.bri.updateOne({ _id: req.params.id }, req.body)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

router.get('/bri/coder/:coder', async (req, res, next) => {
  let query = {}
  try {
    if (req.params.coder === 'empty') {
      query = {
        codedBy: {
          $in: ['', undefined]
        }
      }
    } else {
      query = {
        codedBy: { $in: req.params.coder },
        sourceYear: 2018
      }
    }
    const output = await $db.bri.count(query)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

module.exports = router

function highlight (text) {
  if (!text) { return '' }
  return text.replaceAll('一带一路', '<em>一带一路</em>')
}

function highlightAll (text) {
  if (!text) { return '' }
  text = text.replaceAll('一带一路', '<em>一带一路</em>')
  const locations = [
    '乌兹别克斯坦',
    '吉尔吉斯斯坦',
    '印度尼西亚',
    '埃塞俄比亚',
    '哈萨克斯坦',
    '沙特阿拉伯',
    '塔吉克斯坦',
    '阿尔及利亚',
    '毛里塔尼亚',
    '乌兹别克斯',
    '吉尔吉斯',
    '马来西亚',
    '巴基斯坦',
    '澳大利亚',
    '孟加拉国',
    '安特卫普',
    '白俄罗斯',
    '哥伦比亚',
    '拉脱维亚',
    '塞浦路斯',
    '斯里兰卡',
    '马拉西亚',
    '玻利维亚',
    '巴布韦哈',
    '塞尔维亚',
    '阿塞拜疆',
    '尼日利亚',
    '厄尔瓜多',
    '南太平洋',
    '塞拉利昂',
    '毛里求斯',
    '坦桑尼亚',
    '乌兹别克',
    '罗马尼亚',
    '津巴布韦',
    '亚非拉',
    '尼日尔',
    '菲律宾',
    '俄罗斯',
    '大洋洲',
    '南美洲',
    '东南亚',
    '内蒙古',
    '伊拉克',
    '赞比亚',
    '西班牙',
    '巴拿马',
    '孟加拉',
    '肯尼亚',
    '乌干达',
    '新加坡',
    '柬埔寨',
    '尼泊尔',
    '几内亚',
    '墨西哥',
    '葡萄牙',
    '意大利',
    '奥地利',
    '加拿大',
    '摩洛哥',
    '突尼斯',
    '科威特',
    '东帝汶',
    '土耳其',
    '萨摩亚',
    '乌拉圭',
    '牙买加',
    '莱索托',
    '乌克兰',
    '喀麦隆',
    '匈牙利',
    '立陶宛',
    '新家里',
    '安哥拉',
    '卢森堡',
    '比利时',
    '常州',
    '英国',
    '西安',
    '唐山',
    '法国',
    '越南',
    '印度',
    '韩国',
    '南非',
    '中亚',
    '欧洲',
    '亚洲',
    '中东',
    '东非',
    '加纳',
    '酒泉',
    '印尼',
    '缅甸',
    '非洲',
    '东亚',
    '南亚',
    '巴西',
    '伊朗',
    '蒙古',
    '西亚',
    '老挝',
    '芬兰',
    '德国',
    '南美',
    '香港',
    '泰国',
    '云南',
    '东盟',
    '北非',
    '亚太',
    '美国',
    '北美',
    '捷克',
    '智利',
    '挪威',
    '荷兰',
    '沙特',
    '日本',
    '刚果',
    '埃及',
    '西欧',
    '秘鲁',
    '北欧',
    '欧盟',
    '文莱',
    '澳洲',
    '澳门',
    '波兰',
    '巴林',
    '阿曼',
    '美洲',
    '希腊',
    '斐济',
    '东欧',
    '汤加',
    '新疆',
    '乍得',
    '西非',
    '多哥',
    '瑞士',
    '拉美',
    '瑞典',
    '丹麦',
    '亚、非、拉'
  ]
  const locationMentioned = []
  const regex = new RegExp(locations.join('|'), 'gi')
  let result = {}
  const indices = []
  while ((result = regex.exec(text))) {
    locationMentioned.push(result[0])
    indices.push(result)
  }
  let i = 0
  for (const indice of indices) {
    indice.index += 9 * i
    i++
    text = text.substring(0, indice.index) + `<em>${indice[0]}</em>` + text.substring(indice.index + indice[0].length)
  }
  return {
    text,
    locationMentioned: uniq(locationMentioned).join('、')
  }
}
