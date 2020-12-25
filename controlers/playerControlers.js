const db = require('../models')


const createPlayer = async (req,res) => {

    console.log(req.body)

    try {

        const player = await db.Player({...req.boy})

        const playerSaved = await player.save()

        return res.status(200).send(playerSaved)
        
    } catch (error) {res.status(402).json({message : error})}
}


const playerControlers = {createPlayer}

module.exports = playerControlers