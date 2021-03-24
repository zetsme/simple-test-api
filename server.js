import express from 'express';
import usersRouter from './usersRouter.js';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(5000, () => console.log('App is running on port 5000'));
