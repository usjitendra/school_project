
const  mongoose  = require("mongoose");

module.exports={
  db1:mongoose.createConnection('mongodb://localhost:27017/db',function(err,resolve){
     if(err){
         console.log("detabs error in mongoosedb..");
     }else{
        console.log("db connect successful");
     }
  })
}