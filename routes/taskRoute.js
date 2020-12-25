
const express = require('express')
const controlers = require('../controlers/taskControlers');
const authToken = require('../middlewares/auth');

const router = express.Router()


router.post('/createTask',authToken, controlers.postTask);

router.get('/:id',authToken, controlers.getAllTasks);

router.put('/:id', authToken, controlers.updateTask);

router.get('/byId/:id',authToken, controlers.getTaskById);

router.delete('/:id',authToken, controlers.deleteTask);

module.exports = router