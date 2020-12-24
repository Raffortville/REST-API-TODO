const {check, validationResult } = require('express-validator')

const registerValidation = [

    check('username').isLength({min:5}).withMessage("must be at least 5 characters"),
    check('email').isEmail().normalizeEmail(),
    check('password').isLength({min:6}).withMessage("must be at least 6 characters"),

    (req,res,next) => { 

        const errors = validationResult(req)
        
        if(!errors.isEmpty()) return res.status(403).json({message:"Not valid characteres or values"});
        next()
    },
]

module.exports = registerValidation