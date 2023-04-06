const {productCollection}=require("../database_config/database_config")

const getAllProducts=async(req,res)=>{
    const result=await productCollection.find({}).toArray()
    return res.send(result)
}

const addProduct=async(req,res)=>{
    const result=await productCollection.insertOne(req.body)
    return res.send(result)
}

module.exports={
    getAllProducts,addProduct
}