import { Router } from "express";
import { TasksController } from '../controllers/taskControllers';

const taskRouter=Router()
const tasksController= new TasksController()
taskRouter.get('/tasks', tasksController.getTasks) 
taskRouter.post('/tasks', tasksController.createTask)
taskRouter.put('/tasks/:id', tasksController.updateTask)
taskRouter.delete('/tasks/:id', tasksController.deleteTask)
export { taskRouter }

