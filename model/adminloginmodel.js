const mongoose=require('mongoose');
const db=require('../config/dbconnection');


const adminlogin=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:String
    }


});


module.exports=db.db1.model('login',adminlogin);