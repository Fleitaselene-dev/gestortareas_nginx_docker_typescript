import { Router } from "express";
import { TasksController } from '../controllers/taskControllers';
const taskRouter=Router()
const tasksController= new TasksController()
taskRouter.get('/tasks', TasksController.getTasks) 
taskRouter.post('/tasks', TasksController.createTask)
taskRouter.put('/tasks/:id', TasksController.updateTask)
taskRouter.delete('/tasks/:id', TasksController.deleteTask)
export default taskRouter

