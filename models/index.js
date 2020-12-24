const mongoose = require('mongoose')
require('dotenv').config()
const Task = require('./taskSchema')
const User = require('./userSchema')

const dbUrl = process.env.DB_URL

mongoose.connect(dbUrl,{keepAlive:true,useCreateIndex:true,useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
.then(() => console.log("db connected"))
.catch(() => console.log("connexion db echec"))

mongoose.set("debug",true)
mongoose.Promise = Promise

const models = {Task,User}

module.exports = models
