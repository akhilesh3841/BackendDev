const express = require('express');
const { test } = require('../controllers/usercontroller.js');

const router= express.Router();

router.get('/',test);
module.exports = router;