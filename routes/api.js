const express = require('express');
const router = express.Router();
const StockModel = require('../models/stockModel')

router.get('/get', (req, res) => {
    StockModel.find({})
        .then((data) => {
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
        })
})

router.post('/find', (req, res) => {
    console.log(req.body)
    StockModel.find(req.body)
        .then((data) => {
            console.log(data)
            res.json(data)
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router