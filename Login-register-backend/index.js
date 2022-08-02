// type:module in package.json file if we are used immport express from "express"
const express = require("express");
const cors =require("cors")
const mongoose = require("mongoose")

const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/myLoginRegisterDB',{
    useNewUrlParser: true,
    useUnifiedTopology:true
},()=>{
    console.log("DB connected")
});

//Routes
// app.get("/login",(req,res)=>{
//     res.send("My API login get")
// })
app.post("/login",(req,res)=>{
    res.send("My API login")
})
app.post("/register",(req,res)=>{
    res.send("My API register")
})
const port=8080
app.listen(port,()=>{
    console.log(`be started at port ${port}`)
})

// 35 minuts 