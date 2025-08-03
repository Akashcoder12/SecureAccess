import express from 'express';
import {login,logout,register,getAllUsers,deleteUser} from '../controllers/authController.js';
import {requireAuth} from '../middleware/authMiddleware.js';
import {requireAdmin} from '../middleware/roleMiddleware.js';


const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/me",requireAuth,(req,res)=>{
     res.json(req.user);
});

router.get('/users',requireAuth,requireAdmin,getAllUsers);
router.delete('/users/:id',requireAuth,requireAdmin,deleteUser);


export default router;