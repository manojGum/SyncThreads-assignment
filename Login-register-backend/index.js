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
// user Schema
const userSchema= new mongoose.Schema({
    name:String,
    email: String,
    password: String
})

// model
const User=new mongoose.model("User",userSchema)

//Routes
app.get("/",(req,res)=>{
    res.send("My API")
})



app.post("/login",(req,res)=>{
    const {email , password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login successfull",user:user})
            }else{
                res.send({message:"user and password didn't match"})
            }
        }else{
            res.send({message:"User not Registered"})
        }
    })
})




app.post("/register",(req,res)=>{
    // // res.send("My API register")
    // console.log(req.body)
    const {name , email , password}=req.body
    // check alredy exist or not 
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registerd"})
        }
        else{
            // mongoDb user create
    const user= new User({
        // name:name
        name,
        email,
        password
    })
    user.save(err=>{
       if(err){
        res.send(err)
       }
       else{
        res.send({message:"Successfully Registerd"})
       } 
    })
        }

    })

    
})
const port=8080
app.listen(port,()=>{
    console.log(`be started at port ${port}`)
})

// 35 minuts 