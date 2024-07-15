import express, { Request, Response } from 'express';
import sequelize from './config/database';
import userRoutes from './routes/userRoutes';
require('dotenv').config()

const app = express();
const port = 5000 || process.env.PORT;

app.use('/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello Express.js')
});

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello Test!!!')
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
    await sequelize.sync();
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  console.log(`Server is running at http://localhost:${port}`);
});
