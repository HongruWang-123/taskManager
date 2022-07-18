const express = require('express');
const taskController = require('../controller/taskController.js');
const router = express.Router();
//get all tasks
// router.get('/', taskController.getAllTasks);
//get one task
// router.get('/:id', taskController.getTask);
//create a task
// router.post('/', taskController.createTask);
//update a task
// router.patch('/:id',taskController.updateTask);
//delete a task
// router.delete('/:id',taskController.deleteTask);

router.route('/').get(taskController.getAllTasks).post(taskController.createTask);
router.route('/:id').get(taskController.getTask).patch(taskController.updateTask).delete(taskController.deleteTask);
module.exports = router;