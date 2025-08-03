import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

const createToken=(user)=>{
    return jwt.sign({_id:user._id,role:user.role},process.env.JWT_SECRET,{
        expiresIn:'7d',
    });
};


export const register=async(req,res)=>{
      const {name,email,password,role}=req.body;

      try{
        const existUser=await User.findOne({email});

        if(existUser){
            return res.status(400).json({msg:"User already exists"});
        }

        const user=await User.create({name,email,password,role});
        const token=createToken(user);
        res.status(201).json({user,token});
      }
       catch(err) {
       console.error("Registration Error:", err); 
       res.status(500).json({ msg: "Registration failed", error: err.message || err });
       }
};


export const login=async(req,res)=>{
     const {email,password}=req.body;

     try{
        const user=await User.findOne({email});

        if(!user || !(await user.comparePassword(password))){
             return res.status(400).json({msg:"Invalid credentials"});
        }

        const token=createToken(user);
        res.status(200).json({user,token});
     }
     catch(err){
         res.status(500).json({msg:"Login failed"});
     }
};

export const logout=(req,res)=>{
    res.clearCookie("token").json({msg:"Logged out"});
};




//Get all users (admin-only)

export const getAllUsers=async(req,res)=>{
       
    try{
         const users=await User.find().select("-password");
         res.status(200).json(users);
    }
    catch(err){
        res.status(500).json({error:'Server Error',err});

    }
};


//delete a user by ID (admin-only)

export const deleteUser=async(req,res)=>{
     try{
         const {id}=req.params;
         await User.findByIdAndDelete(id);
         res.status(200).json({message:'User deleted successfully'});
     }
     catch(err){
         res.status(500).json({error:'Failed to delete user',err});
     }
};


