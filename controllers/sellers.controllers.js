const { sellersCollection } = require("../database_config/database_config")

exports.createSellers = async(req,res) => {
    const result = await sellersCollection.insertOne(req.body);
    return result;
};