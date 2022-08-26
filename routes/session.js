const express=require('express')
const router=express.Router()
const User=require('../models/user.model')
const jwt=require('jsonwebtoken')
require('dotenv').config()

router.post('/login',async(req,res)=>{
    const response= await User.findOne({email : req.body.email , password : req.body.password});
   if( response!=null ){
    const accessToken= jwt.sign({surname:response.surname},process.env.TOKEN_KEY,{expiresIn : '10s'})
    const refrshToken= jwt.sign({surname:response.surname},process.env.RE_TOKEN_KEY,{expiresIn : '24h'})
    res.send({accessToken,refrshToken});
   }
   
 })
 

 router.post('/createAccount',async(req,res)=>{
  try {
 const re= await User.findOne({ email: req.body.email});
 if(re==null){
    const user=new User({
    firstName:req.body.firstName,
    surname:req.body.surname,
    gender:req.body.gender,
    dateOfBirth:req.body.dateOfBirth,
    phoneNumber:req.body.phoneNumber,
    email : req.body.email,
    password : req.body.password
  })

    const response=await user.save();
    response != null ? res.json({code:'200',message:'Account create successfull',data:null}) : 
                       res.json({code:'500',message:'User Account Create Fail',data:null});
  }else{
  res.json({code:'500',message:'Email is AllreadyExists',data:null});
 }
} catch (error) {
  res.send('Err'+error)
}
})
module.exports=router
