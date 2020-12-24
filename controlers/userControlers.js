const db = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require ('dotenv').config()


const signUpUser = async (req,res) => {

    const emailExist = await db.User.findOne({email:req.body.email})

    if(emailExist) return res.status(401).send({message : "this mail is already registred !"})

    const hash = await bcrypt.hashSync(req.body.password,10)

    const user =  await db.User({...req.body,password:hash})

    try {

      const savedUser =  await user.save()

        return res.status(200).json(savedUser)
        
    } catch (error) {
        
        res.status(400).send({message :error.message})
    }

}

const loginUser = async (req,res) => {

    try {

        const user = await db.User.findOne({email :req.body.email})

        if(!user) return res.status(401).json({error:"User not found !"})

        const validPass = await bcrypt.compareSync(req.body.password,user.password)

        if(!validPass) return res.status(402).json({error :"Wrong password !"})
        
       /* const token = jwt.sign({id:user._id},process.env.SECRET_TOKEN)

        return res.status(200).send({username: user.username,email:user.email,token:token,userId:user._id})*/

        return res.status(200).send(user)
  
    } catch (error) {
        
        res.status(400).send({message:error.message})
    }
}

const controlers = {signUpUser,loginUser}

module.exports = controlers