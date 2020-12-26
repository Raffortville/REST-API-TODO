const db = require('../models')


const postTask = async (req,res) => {

    const {title,description,color,userId} = req.body.payload

    const data = {title:title,description:description,color:color,userId:userId}

    const task =  db.Task({...data})

    try {

        const taskSaved = await task.save()

        return res.status(200).send(taskSaved)
    
    } catch (error) { 

        res.status(407).json({message:error.message})
    }
}
const player = { name:"Payet", position :"milieu"} 

const fetchAllTasks = async (req,res) => {

    try {

        return res.status(202).send(player)
        
    } catch (error) {
     
        res.status(406).json({message : error})
    }
}

const getAllTasks = async (req,res) => {

    try {

        const tasks = await db.Task.find({userId:req.params.id})

        return res.status(200).send(tasks)
        
    } catch (error) { res.status(400).send(error.message)}
}

const getTaskById = async (req,res) => {

    try {

        const task = await db.Task.findById(req.params.id)

        return res.status(200).send(task)
        
    } catch (error) {res.status(400).send({message:error.message})}
}

const deleteTask = async (req,res) => {

    try {

        await db.Task.findOneAndRemove(req.params.id)

        return res.status(200).send('task deleted !')
        
    } catch (error) {res.status(400).send(error.message)}
}

const updateTask = async (req,res) => {

    const {title,description,color,userId} = req.body.payload

    const data = {title:title,description:description,color:color,userId:userId}

    try {

        const task = await db.Task.findByIdAndUpdate(req.params.id,data,{new:true})

        return res.status(200).send(task)
        
    } catch (error) {res.status(400).send({message:error.message})}
}

const taskControlers = {postTask,getAllTasks,updateTask,getTaskById,deleteTask,fetchAllTasks}

module.exports = taskControlers
