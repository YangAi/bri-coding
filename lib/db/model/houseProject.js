const mongoose = require('mongoose')

const Schema = mongoose.Schema

const HouseProjectSchema = new Schema({
  lianjiaId: String,
  name: String,
  averagePrice: Number,
  historicalTransactions: Number,
  recentTransaction: Number,
  currentOnRent: Number,
  currentOnSale: Number,
  district: String,
  area: String,
  year: Number,
  tag: Array,
  hasTag: Boolean,
  address: Array,
  follower: Number,
  buildingType: String,
  propertyFee: Number,
  propertyMaintainer: String,
  developer: String,
  totalBuildingCount: Number,
  totalPropertyCount: Number,
  propertyMaintainerPhone: String,
  yearBuiltStart: Number,
  yearBuiltEnd: Number,
  heatingService: String,
  parkingLotUpperGround: Number,
  parkingLotUnderGround: Number,
  parkingLotTotal: Number,
  parkingFee: Number,
  carPeopleSeparation: Boolean,
  coordinates: {
    location: {
      lng: Number,
      lat: Number
    },
    precise: Number,
    confidence: Number,
    comprehension: Number,
    level: String
  },
  hasStarbucks: Object,
  hasShoppingMall: Object,
  hasConvenienceStore: Object,
  hasSupermarket: Object,
  hasSubway: Object,
  hasPrimarySchool: Object,
  hasMiddleSchool: Object
}, { strict: false, timestamps: true })

const HouseProject = mongoose.model('House.Project', HouseProjectSchema)

module.exports = HouseProject
