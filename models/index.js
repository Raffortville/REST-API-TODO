const mongoose = require('mongoose')
require('dotenv').config()
const Task = require('./taskSchema')
const User = require('./userSchema')
const Player = require('./playerSchema')

const dbUrl = process.env.MONGODB_URI

mongoose.connect(dbUrl,{keepAlive:true,useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
.then(() => console.log("db connected"))
.catch(() => console.log("connexion db echec"))

mongoose.set("debug",true)
mongoose.Promise = Promise

const models = {Task,User,Player}

module.exports = models
