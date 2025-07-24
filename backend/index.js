const express=require('express');
const cors=require('cors');
const { connection } = require('./config/db');
const { userRouter } = require('./routes/userRoutes');
require('dotenv').config()

const app=express();
app.use(express.json())
app.use(cors())



app.get("/",async(req,res)=>{
    try{
        
        res.send("hello world")
    }catch(err){
        res.status(500).json({"message":err.message})
    }
})

app.use('/user',userRouter)

const PORT=process.env.PORT || 9000
app.listen(PORT, async()=>{
    try{
        await connection
        console.log("db is connected",PORT)
    }catch(error){
        console.log("error",error.message)
    }
})