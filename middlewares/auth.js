const jwt = require('jsonwebtoken')
const { Error } = require('mongoose')

const authToken = (req,res,next)  => {

    try {

        const token = req.headers['authorization']
        const decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
        const userId = decodedToken.userId;

        if(req.body.userId && req.body.userId !== userId){

            throw 'Invalid user ID';

        } else {

            req.user = decodedToken
            console.log("header ok")
            next()
        }
        
    } catch (error) {
        
        res.status(400).json({error : new Error('invalid request')})
    }

}

module.exports = authToken