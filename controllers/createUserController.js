const {usersCollection}=  require("../database_config/database_config.js")

const createUser=async(req,res)=>{
    const user=req.body
    const result=await usersCollection.insertOne(user);
    return res.send(result);
}
module.exports={
    createUser
}
