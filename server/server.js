import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoutes.js';


import connectDB from './config/mongodb.js';


const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
await connectDB();


app.use('/api/users', userRouter);
app.use('/api/images', imageRouter); 

app.get('/', (req, res) => {
  res.send('Hello World!'); 
});

if(process.env.NODE_ENV !== 'production'){
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); }

export default app;