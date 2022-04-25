const express = require("express");
const module2 = express.Router();
const mongodb = require("mongodb")

const skill = mongodb.MongoClient;
module2.post("/",(req,res)=>{

    const record = {
        "p_id":req.body.p_id,
        "p_name":req.body.p_name,
        "p_price":req.body.p_price,
    }
    skill.connect(process.env.CONNECTION_URL,(err,connection)=>{
        if(err) throw err
        else{
            const db = connection.db(process.env.DATABASE_NAME,{
                useNewUrlParser : true,
                useUnifiedTopology : true
            });
            db.collection(process.env.COLLECTION_NAME).insertOne(record,(err,result)=>{
                    if(err) throw err;
                    else{
                        res.send("record insert successfully")
                    }
           })
        }
    });
});
module.exports = module2