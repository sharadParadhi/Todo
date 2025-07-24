const express=require('express');
const { User } = require('../model/userModel');


const userRouter=express.Router();

userRouter.post('/register',async(req,res)=>{
    const {name, email, password}=req.body
    try{
        console.log('name, email, password',name,email,password)
        const checkUser=await User.findOne({email})
        if(checkUser){
            res.status(200).json({message:"User is already exist please login!"})
        }
        const newUser=new User({name,email,password});
        await newUser.save();
        const userObj=newUser.toObject()
        delete userObj.password
        res.status(201).json({message:'user created successfully',data:userObj})

    }catch(err){
        console.log("error",err.message)
        res.status(500).json({"message":err.message})
    }
})

module.exports={userRouter}