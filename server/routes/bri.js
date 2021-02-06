const { Router } = require('express')
const bodyParser = require('body-parser')
const $db = require('../../lib/db')
const { apiResponse } = require('../utils/response')

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
    console.log(exclude)
    const output = await $db.bri.findOne({ codedBy: '', _id: { $ne: exclude } })
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

module.exports = router
