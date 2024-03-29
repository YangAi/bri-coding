const { Router } = require('express')
const bodyParser = require('body-parser')
const { uniq } = require('lodash')
const $db = require('../../lib/db')
const { apiResponse } = require('../utils/response')

const router = Router()

router.get('/bri/action-type/new', async (req, res, next) => {
  try {
    const lock = Date.now() - 300 * 1000
    let output = await $db.bri.findOne({
      $or: [
        { actualParticipated: 1, actionType: '', lock: undefined },
        { actualParticipated: 1, actionType: '', lock: { $lt: lock } }
      ]
    })
    await $db.bri.updateOne({ _id: output._id }, { lock: Date.now() })
    output = output.toObject()
    output.mentionPrevious = highlightAll(output.mentionPrevious).text
    const mention = highlightAll(output.mention)
    output.mention = mention.text
    output.locationMentionedAuto = mention.locationMentioned
    output.mentionNext = highlightAll(output.mentionNext).text
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

router.get('/bri/action-type/:id', async (req, res, next) => {
  try {
    const output = await $db.bri.findOne({ _id: req.params.id })
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

router.put('/bri/action-type/:id', bodyParser.json(), async (req, res, next) => {
  try {
    const output = await $db.bri.updateOne({ _id: req.params.id }, req.body)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

router.get('/bri/action-type/coder/:coder', async (req, res, next) => {
  let query = {}
  try {
    if (req.params.coder === 'empty') {
      query = {
        actualParticipated: 1, actionType: ''
      }
    } else {
      query = {
        // title: { $not: /摘要/ },
        actualParticipated: 1,
        actionType: '',
        codedBy: req.params.coder
      }
    }
    const output = await $db.bri.count(query)
    res.send(apiResponse(output))
  } catch (e) {
    next(e)
  }
})

module.exports = router

function highlightAll (text) {
  if (!text) { return '' }
  text = text.replace(/ /g, '')
  text = text.replace(/一带一路/g, '<em>一带一路</em>')
  const locations = [
    '密克罗尼西亚联邦',
    '特立尼达和多巴哥',
    '刚果民主共和国',
    '巴布亚新几内亚',
    '安提瓜和巴布达',
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
    '刚果共和国',
    '马达加斯加',
    '赤道几内亚',
    '阿尔巴尼亚',
    '斯洛文尼亚',
    '所罗门群岛',
    '哥斯达黎加',
    '土库曼斯坦',
    '加勒比地区',
    '刚果（布）',
    '刚果（金）',
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
    '塞内加尔',
    '科特迪瓦',
    '莫桑比克',
    '纳米比亚',
    '利比里亚',
    '博茨瓦纳',
    '马尔代夫',
    '格鲁吉亚',
    '亚美尼亚',
    '保加利亚',
    '斯洛伐克',
    '克罗地亚',
    '爱沙尼亚',
    '北马其顿',
    '摩尔多瓦',
    '库克群岛',
    '瓦努阿图',
    '基里巴斯',
    '昆士兰州',
    '委内瑞拉',
    '厄瓜多尔',
    '萨尔瓦多',
    '多米尼加',
    '多米尼克',
    '格林纳达',
    '巴巴多斯',
    '拉丁美洲',
    '巴勒斯坦',
    '尼加拉瓜',
    '中西亚',
    '加勒比',
    '刚果金',
    '中东欧',
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
    '阿根廷',
    '亚非拉',
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
    '索马里',
    '南苏丹',
    '塞舌尔',
    '吉布提',
    '布隆迪',
    '佛得角',
    '冈比亚',
    '卢旺达',
    '利比亚',
    '科摩罗',
    '阿联酋',
    '卡塔尔',
    '黎巴嫩',
    '阿富汗',
    '马耳他',
    '新西兰',
    '圭亚那',
    '苏里南',
    '以色列',
    '港澳台',
    '港澳',
    '台湾',
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
    '苏丹',
    '加蓬',
    '贝宁',
    '马里',
    '也门',
    '波黑',
    '黑山',
    '纽埃',
    '古巴',
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
