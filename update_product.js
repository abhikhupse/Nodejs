const express = require("express");
const module3 = express.Router();
const mongodb = require("mongodb")

const skill = mongodb.MongoClient;
module3.put("/",(req,res)=>{
    skill.connect(process.env.CONNECTION_URL,(err,connection)=>{
        if(err) throw err
        else{
            const db = connection.db(process.env.DATABASE_NAME)
            db.collection(process.env.COLLECTION_NAME).updateOne({"p_id": req.body.p_id}, {
                $set: {
                    "p_name": req.body.p_name,
                    "p_price" : req.body.p_price
                }
            }, (err, result) => {
                if(err) throw err;
                else{
                    res.send({"msg" : "success"})
                }
                   
           })
        }
    });
});
module.exports = module3