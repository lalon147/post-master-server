const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

 const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gw8hef2.mongodb.net/?retryWrites=true&w=majority`;
 
 console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const sellersCollection = client.db("post-master").collection("sellers");
 






module.exports={
    sellersCollection
}



