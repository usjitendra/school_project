const express = require('express');
const routers = express.Router();
const adminmodel = require('../../../model/adminloginmodel');
const adminloginmodel = require('../../../model/adminloginmodel');
const auth_secreat = require('../../../config/constaint');
const bcrypt=require('bcrypt');
const auth=require('../../../helper/authvailidation');
const validation=require('../validation/adminvalidation');


routers.use((req, res, next) => {
       const auth = req.headers.auth;
       if (auth == auth_secreat.auth) {
              next();
       } else {
              res.status(500).send({ massage: "auth does not have correct" })
       }
})

//    adminloginmodel.find().then(deta=>{
//        if(deta.length==0){
//               const deta={
//                      name:"jitendra",
//                      lastname:"chauhan",
//                      email:"usjitendra055@gmai.com",
//                      password:"123456",
//                      address:"saraykali das",
//                      pincode:"222161",
//                      state:"gujrat",
//                      nationam:"india"
//               }
//               adminloginmodel.create(deta).then(deta=>{
//                   console.log("admin create");
//               })
//        }
//    })

routers.route('/registration').post(async (req, res) => {
       // res.send(req.body);

       try {
              let deta = {
                     name: req.body.name,
                     lastname: req.body.lastname,
                     mobile: req.body.mobile,
                     email: req.body.email,
                     password: req.body.password
              }

             await  adminmodel.create(deta)
                     .then((deta) => {
                            res.status(200).send({ deta: deta });
                     })

                     .catch(err=>{
                            res.status(500).send({massage:"deta have allready",error:err});
                     })

       } catch (error) {
              res.status(200).send({ err: error });
       }
})


routers.route('/login').post(async (req, res) => {
       try {
              const { email, password } = req.body;
              const admin = await adminmodel.findOne({ email: email });
              if (!admin) {
                   return  res.status(400).send({ massage: "email not match" });
              }
                 const match=await bcrypt.compare(password,admin.password);
                 if(!match){
                     return res.status(400).send({massage:"password not match"});
                 }
                 res.status(200).send({massage:"login successful",token: await auth.generateToken(admin._id)});
       } catch (error) {
              res.status(400).send({ massage:error.massage});
       }
})



module.exports = routers;