
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/api/test',(req,res)=>{
    res.json({message:'API is working!'});
});

//auth routes
app.use('/api',authRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
     console.log('MongoDB connected');
 })
 .catch((err)=>{
     console.log(err);
 })

 const PORT=process.env.PORT || 3001;
 app.listen(PORT,()=>{
     console.log(`Server running on http://localhost:${PORT}`);
 })  