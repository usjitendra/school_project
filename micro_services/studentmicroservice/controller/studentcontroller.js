const express=require('express');
const routers=express.Router();




routers.route('/add').post((req,res)=>{
     res.send(req.body);
})


module.exports=routers;