const express = require('express');
const { categoryController } = require('../controllers');

const router = express.Router();

router.get('/', categoryController.findAll);

module.exports = router;
