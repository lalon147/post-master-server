const express = require('express');
const cors=require('cors');
const app=express()
require("dotenv").config();
app.use(cors())
app.use(express.json())

const adminRoute= require('./Routes/AdminRoute')

const port =  process.env.PORT || 5000



app.get("/",(req,res)=>{
   res.send("selll")
})
// app.use("/jwt",jwtRoute);
app.use("/api/v1/admin",adminRoute)


app.listen(port, ()=>{
   console.log("Server Listening on port")
  
})
