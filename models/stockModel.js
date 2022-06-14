const mongoose = require('mongoose')

const Schema = mongoose.Schema
const stockSchema = new Schema({
    category: String,
    productName: String,
    brandNumber: { type: String },
    mrp: String,
    volumeMl: String,
    stock: String,
    balance: String
})

const StockModel = mongoose.model('stocks', stockSchema)

module.exports = StockModel