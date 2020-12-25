const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const taskRoute = require('./routes/taskRoute')
const userRoute = require('./routes/userRoute')
const playerRoute = require('./routes/playerRoute')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

   /* https://vast-plains-10523.herokuapp.com/*/


    app.get('/', (req,res) => {

    return res.send("test de l'API")
    })


app.use('/tasks/', taskRoute)

app.use('/users/',userRoute)

app.use('/players/', playerRoute)

const port =  process.env.PORT ||8080

app.listen(port, () =>{console.log(`server at` + port)})