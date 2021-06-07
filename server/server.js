const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");
const bodyparser = require("body-parser");
const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
let ashokIT = mongodb.MongoClient;
app.get("/products",(rest,res)=>{
ashokIT.connect("mongodb+srv://admin:admin@cluster0.jgnmk.mongodb.net/ashokit_ws?retryWrites=true&w=majorrity",(err,connection)=>{
    if(err) throw err;
    else{
        let db = connection.db("ashokit_ws");
        db.collection("products").find().toArray((err,array)=>{
if(err) throw err;
else{
    res.send(array);
}
        });
    }
});

});

let port = process.env.Port || 8080;
app.listen(port,()=>{
    console.log("server started !!!");
})
