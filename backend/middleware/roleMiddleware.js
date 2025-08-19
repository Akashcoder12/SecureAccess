import User from '../models/userModel.js';

export const requireAdmin=(req,res,next)=>{
    if(req.user.role!=="admin"){
        return res.status(403).json({msg:"Admin access only"})
    }
    next();
}