import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const requireAuth=async(req,res,next)=>{
     
    const token=req.headers.authorization?.split(" ")[1];

    if(!token){
        return res.status(401).json({msg:"Unauthorized access"});
    }

    try{
         const decoded=jwt.verify(token,process.env.JWT_SECRET);
         const user=await User.findById(decoded._id).select("-password");
         
         if(!user){
             return res.status(401).json({msg:"User not found"});
         }
         req.user=user;

         next();
    }
    catch(err){
        res.status(401).json({msg:"Invalid token"});
    }
}

