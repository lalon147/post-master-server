const express = require('express');
const { createSellers } = require('../controllers/sellers.controllers');
const router = express.Router();


router.route('/')
.post(createSellers)

module.exports = router;