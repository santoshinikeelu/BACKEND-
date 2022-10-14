const express = require('express');
const router = express.Router();

router.get('/testing', function (req, res) {
    res.send('My first ever api!')
});

module.exports = router;