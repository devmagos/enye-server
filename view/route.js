const express = require('express');

const getCurrency = require('../controller/app');

const router = express.Router();

router.get('/rates', getCurrency);


module.exports = router