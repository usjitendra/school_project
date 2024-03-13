const express=require('express');
const bodyparser=require('body-parser');
const proxy=require('express-http-proxy');
const serverlist  = require('./util/serverlist');
const app=express();


app.use(bodyparser.json());


const port=serverlist.serverlist.rootserver.port;
app.use('/adminmicroservice',proxy('localhost:'+serverlist.serverlist.adminlogin.port));
app.use('/student',proxy('localhost:'+serverlist.serverlist.studentlogin.port));
app.listen(port,()=>{
    console.log(`Root server start on port ${port}`);
})







