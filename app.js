const express=require('express');
const mongoose=require('mongoose')
const session=require('./routes/session')
const user=require('./routes/user')
const post=require('./routes/post')
const auth = require('./middleware/auth')

const app=express()
const port=4000;

const url='mongodb://localhost/express'
mongoose.connect(url,{useNewUrlParser: true})
const con=mongoose.connection
con.on("open",()=>{
    console.log('MongoDB connected !')
})


app.use(express.json())
app.use('/session',session)
app.use('/user',auth,user)
app.use('/post',post)


app.listen(port,()=>{
    console.log(`server is started in port ${port}`)
})
