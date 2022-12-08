const express = require('express');
const router = express.Router();
const blockController = require('../controllers/blockController');

router.get('/crypto-coins', blockController.getBlock)

module.exports = router;