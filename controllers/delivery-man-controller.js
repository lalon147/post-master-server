const {deliveryManCollection}=require("../database_config/database_config")


 const createDeliveryMan=async(req,res)=>{
  const result=await deliveryManCollection.insertOne(req.body)
   return res.send(result)
   
}

const getAllDeliveryMan=async(req,res)=>{
    const result=await deliveryManCollection.find({}).toArray()
    return res.send(result)
}

module.exports={
getAllDeliveryMan, createDeliveryMan
}