const express = require('express');
const cors=require('cors');
const jwtRoute = require('./Routes/jwtRoute');
const adminRoute= require('./Routes/AdminRoute')
const SellerRoute=require("./Routes/SellerRoute");
const { verifyJwt } = require('./Authorization/jwt');
const app=express()
require("dotenv").config();
app.use(cors())
app.use(express.json())


const port =  process.env.PORT || 5000



app.get("/",(req,res)=>{
   res.send("selll")
})


app.use("/api/v1/admin",adminRoute)
app.use("/api/v1/seller",SellerRoute)
app.use("/api/v1/jwt",jwtRoute)

app.get("/hello",verifyJwt,(req,res)=>{
   res.send("Double Success")
})

app.listen(port, ()=>{
   console.log("Server Listening on port")
  
})
