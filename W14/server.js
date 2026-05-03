const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");

app.use(cors());


app.get("/users",(req,res)=>{
    fs.readFile("users.json", (err,data)=>{
        if(err)
        {
            res.status(500).send("Error reading data");
        }else{
            res.json(JSON.parse(data));
        }
    })
});


app.listen(4001,()=>{
    console.log("Server is working at 4001");
});