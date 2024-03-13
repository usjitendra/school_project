const express=require('express');
const bodyparser=require('body-parser');
const app=express();
const serverList=require('../../util/serverlist');
const admincontoller=require('../adminloginemicroservice/controller/adminlogincontroller');



app.use(bodyparser.json());
app.use('/',admincontoller);
const port=serverList.serverlist.adminlogin.port;

app.listen(port,()=>{
     console.log(`admin login server start on ${port}`);
})
