const express=require("express");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const cors=require("cors");

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
    res.json({message:'API is working!'});
});

mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
     console.log('MongoDB connected');
 })
 .catch((err)=>{
     console.log(err);
 })

 const PORT=process.env.PORT || 6000;
 app.listen(PORT,()=>{
     console.log(`Server running on port ${PORT}`);
 })  