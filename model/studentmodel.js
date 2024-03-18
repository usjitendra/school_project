const mongoose=require('mongoose');
const db=require('../config/dbconnection');
const validation=require('validator');




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
      mobilenumber: {
        type: String, // Ensure that the field is defined as a string
        required: true,
        validate: {
            validator: function(mobilenumber) {
                // Use isMobilePhone function to check if the provided mobile number is valid
                return validation.isMobilePhone(mobilenumber, 'en-IN'); // 'en-IN' is for Indian mobile numbers
            },
            message: props => `${props.value} is not a valid mobile number!`
        }
      },
      addresh:{
         type:String,
         require:true
      },
      permanentadress:{
        type:String,
        require:true
      },
      email: {
        type: String,
        required: true,
        validate:{
          validator:function(email){
            return validation.isEmail(email)
          },
          message: `email is Invalid`
        }
       
      
    }
})



module.exports=db.db1.model('student',student);