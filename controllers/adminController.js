const { ObjectId } = require("mongodb");
const {usersCollection,postCollection}=require("../database_config/database_config");
const { json } = require("express");


const deleteUser=async(req,res)=>{
    const id=req.params.id;
    const result=await usersCollection.deleteOne({_id:new ObjectId(id)})
    return res.send({result,status:200})
}
const  verifyUser=async(req,res)=>{
    const id=req.params.id;
    const query={_id:new ObjectId(id)};
       const options={upsert:true};
       const updatedDoc={
              $set:{
                     verified:true
              }
       }
       const result=await usersCollection.updateOne(query,updatedDoc,options,)
       return res.send({result,status:200})
    }

const activateUser=async(req,res)=>{
    const id=req.params.id
    const query={_id:new ObjectId(id)};
       const options={upsert:true};
       const updatedDoc={
              $set:{
                     activate:true
              }
       }
       const result=await usersCollection.updateOne(query,updatedDoc,options,)
       return res.send({result,status:200})

}
const deactivateUser=async(req,res)=>{
    const id=req.params.id;
    const query={_id:new ObjectId(id)};
       const options={upsert:true};
       const updatedDoc={
              $set:{
                     activate:false
              }
       }
       const result=await usersCollection.updateOne(query,updatedDoc,options,)
       return res.send({result,status:200})

}

const getAllUsers=async(req,res)=>{
    const result=await usersCollection.find({}).toArray()
    return res.send(result)
}

const deletePost=async(req,res)=>{
    const id=req.params.id.trim()
    const result=await postCollection.deleteOne({_id:new ObjectId(id)})
    return res.send(result)

}
module.exports={
    deactivateUser,deletePost,getAllUsers,activateUser,verifyUser,deleteUser
}