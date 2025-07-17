const express = require('express');
const MeController = require('../app/controllers/MeController');
const router = express.Router();

router.get('/stored/courses', MeController.search);

module.exports = router;
