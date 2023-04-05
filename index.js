const express = require('express');
const cors=require('cors');
const jwtRoute = require('./Routes/jwtRoute');
const sellersRoute = require('./Routes/sellers.route')
const deliveryManRoute=require("./Routes/delivery-man")
const app=express()
require("dotenv").config();
app.use(cors())
app.use(express.json())

const port =  process.env.PORT || 5000



app.get("/",(req,res)=>{
   res.send("selll")
})
app.use("/jwt",jwtRoute);
app.use('/api/v1/sellers',sellersRoute)
app.use("/api/v1/delivery-man",deliveryManRoute)


app.listen(port, ()=>{
   console.log("Server Listening on port")
  
})
