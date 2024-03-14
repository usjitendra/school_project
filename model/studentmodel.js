const mongoose=require('mongoose');
const db=require('../config/dbconnection');




const student=new mongoose.Schema({
      name:{
        type:String,
        require:true
      },
      lastname:{
        type:String,
        require:true
      },
      fathername:{
        type:String,
        require:true
      },
      mothername:{
        type:String,
        require:true
      },
      mobilenumber:{
         type:Number,
         require:true
      },
      addresh:{
         type:String,
         require:true
      },
      permanentadress:{
        type:String,
        require:true
      }
})



module.exports=db.db1.model('student',student);