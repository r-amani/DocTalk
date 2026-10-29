import "dotenv/config";
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB connected successfully!!");
    app.listen(process.env.PORT, ()=> console.log(`Server on ${process.env.PORT}`));
});


