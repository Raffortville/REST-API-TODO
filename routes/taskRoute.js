
const express = require('express')
const controlers = require('../controlers/taskControlers');
const authToken = require('../middlewares/auth');

const router = express.Router()

router.post('/createTask', controlers.postTask);

router.get('/:id', controlers.getAllTasks);

router.put('/:id',  controlers.updateTask);

router.get('/byId/:id', controlers.getTaskById);

router.delete('/:id', controlers.deleteTask);

module.exports = router