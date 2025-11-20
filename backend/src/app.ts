import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import morgan from 'morgan';
import {taskRouter} from './routes/taskRoutes';
const app = express();
dotenv.config()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors({
  origin: '*',
}));
app.use(morgan('dev'));

app.use('/api',taskRouter)
app.listen(PORT, () => console.log(` Backend escuchando en puerto ${PORT}`));