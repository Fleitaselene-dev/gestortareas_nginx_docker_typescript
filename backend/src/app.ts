import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRouter from './routes/taskRoutes';
const app = express();
const PORT = 8080;


app.use(cors({
  origin: '*',
}));
app.use(morgan('dev'));



app.get('/api/task',taskRouter)
app.listen(PORT, () => console.log(`🚀 Backend escuchando en puerto ${PORT}`));