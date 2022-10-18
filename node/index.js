const express = require('express')
const fileUpload = require("express-fileupload")
const {insertData,apiEndPoint} = require('./Model')
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(function(req,res,next){
     res.setHeader("Access-Control-Allow-Origin",'http://localhost:3000')
     next()
})

app.get('/',function(req,res){
   res.send("hello")
})

app.get('/allData',function(req,res){
     apiEndPoint("mern","lol",res)
})

app.post('/data',fileUpload(),function(req,res){
      let body = JSON.parse(req.body.data)
       let title = body.tile
      try{
        insertData("mern","lol",title)
        res.send({message:"success",status:true})
      }catch(e){

      }
})

app.listen(8000,'127.0.0.1')