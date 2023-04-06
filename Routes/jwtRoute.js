const express = require('express');
const jwt=require("jsonwebtoken");
const router=express.Router();
require("dotenv").config()



router.get("/",async(req,res)=>{
    const email=req.query.email 
    const role=req.query.role
    const payload={email,role}  
    if(email && role){
        const token =jwt.sign(payload,process.env.ACCESS_TOKEN,{expiresIn:"1h"})
        return res.send({token:token})            
    }
    res.status(403).send({message:"UNAUTHORIZED"})
})



module.exports=router