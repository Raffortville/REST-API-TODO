const express = require('express')
const userControler = require('../controlers/userControlers')
const registerValidator = require('../controlers/validators')


const router = express.Router()

router.post('/signup', registerValidator,userControler.signUpUser)

router.post('/login',userControler.loginUser)

  
module.exports = router



