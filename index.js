const express = require('express');
const cors=require('cors');
const { sellersCollection } = require('./database_config/database_config');
const app=express()
require("dotenv").config();
app.use(cors())
app.use(express.json())

const port =  process.env.PORT || 5000




app.get('/', async (req,res) => {
    const sellers=await sellersCollection.find({}).toArray()
    res.send(sellers);
})





app.listen(port, ()=>{
   console.log("Server Listening on port")
  
})
