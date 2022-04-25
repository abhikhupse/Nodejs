const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors());

app.use(express.json());

const module1 =require("./get_products")
app.use("/get_products",module1)

const module2 =require("./post_products")
app.use("/post_products",module2)

const module3 =require("./update_product")
app.use("/update_products",module3)

const module4 =require("./delete_product")
app.use("/delete_products",module4)

let port = process.env.PORT || 1234
app.listen(port,()=>{
    console.log(`server listening the port number ${port}`)
})




//mongodb atlas link :- "mongodb+srv://abhi:abhi123@cluster0.2o0p4.mongodb.net/skill_node_1?retryWrites=true&w=majority