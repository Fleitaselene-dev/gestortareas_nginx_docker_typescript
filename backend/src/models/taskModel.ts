import mongoose, { Schema } from "mongoose";
import type { ITask } from "../types/taskTypes";
const TasksSchema = new Schema({
  title: {
    type: String
  },
  description: { 
    type: String
  },
  status: { 
    type: Boolean
   },
});
TasksSchema.index({ role:1 });
export const Tasks = mongoose.model<ITask>("Task", TasksSchema);