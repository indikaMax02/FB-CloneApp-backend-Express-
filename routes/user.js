const express=require('express')
const router=express.Router()
const User=require('../models/user.model')

const tools= require("../util/userUtil.js")



router.post('/createAccount',async(req,res)=>{

      const user=new User({
        firstName:req.body.firstName,
        surname:req.body.surname,
        gender:req.body.gender,
        dateOfBirth:req.body.dateOfBirth,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        email:req.body.email
      })

      try {
        
       tools.existsUser()
      
        // const response=await user.save();
        // res.json({code:'200',message:'Account create successfull',data:null})
      
        
      } catch (error) {
        res.send('Err'+error)
      }
})


router.post('/login',(req,res)=>{
    res.send('login account')
})
module.exports=router
