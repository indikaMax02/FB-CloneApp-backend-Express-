const express=require('express')
const router=express.Router()
const User=require('../models/user.model')




router.put('/updateProfile/:email' ,async(req,res)=>{
  const response= await User.findOneAndUpdate({email : req.params.email} , req.body)
  response!=null ? res.json({code:'200',message:'profile update successfull',data:null}) : 
                   res.json({code:'500',message:'profile update faild',data:null})
})

module.exports=router
