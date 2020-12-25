const express = require('express')
const controler = require('../controlers/playerControlers');
const { model } = require('../models/taskSchema');

const router = express.Router()

router.post('/', controler.createPlayer);


module.exports = router