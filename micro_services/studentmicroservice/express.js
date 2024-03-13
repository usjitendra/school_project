const express=require('express');
const app=express();
const bodypasser=require('body-parser');
const serverlist=require('../../util/serverlist');
const controller=require('../studentmicroservice/controller/studentcontroller');

app.use(bodypasser.json());


app.use('/',controller);




const port=serverlist.serverlist.studentlogin.port;


app.listen(port,()=>{
     console.log(`student server start on port ${port}`)
})