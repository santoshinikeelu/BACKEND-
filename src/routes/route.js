const express = require('express');
const router = express.Router();
const xyz = require('../logger/logger.js')
const abc = require('../util/helper.js')
const format = require('../validator/formatter.js')
const lodash1= require('../routes/lodash');
router.get('/test-me', function (req, res) {
    console.log("call my function ",xyz.func)
    console.log("today's date is:",abc.todaydate)
    console.log("current month is:",abc.month)
    console.log("batchinfo is:",abc.info)
    console.log("hardcode string",format.trim)
    console.log("month are",lodash1.chunk)
    console.log("odd no.",lodash1.odd)
    console.log("union array",lodash1.union)
    console.log("keyvalue",lodash1.keys)

    

    
    res.send('My first ever api!')
});

module.exports = router;