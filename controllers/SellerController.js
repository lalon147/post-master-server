const {postCollection}=require("../database_config/database_config")

const getAllProducts=async(req,res)=>{
    const result=await postCollection.find({}).toArray()
    return res.send(result)
}

const addPost=async(req,res)=>{
    const result=await postCollection.insertOne(req.body)
    return res.send(result)
}

module.exports={
    getAllProducts,addPost
}