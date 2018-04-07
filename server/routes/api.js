const express = require('express');
const router = express.Router();
const tablesController = require('../controllers/tablesController')


router.get('/tables', tablesController.list)
router.post('/tables', tablesController.save_table)

module.exports = router
