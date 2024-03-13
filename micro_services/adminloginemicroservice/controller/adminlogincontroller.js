const express = require('express');
const routers = express.Router();
const adminmodel = require('../../../model/adminloginmodel');
const adminloginmodel = require('../../../model/adminloginmodel');

routers.route('/registration').post((req, res) => {
       // res.send(req.body);

       try {
              let deta = {
                     name: req.body.name,
                     lastname: req.body.lastname,
                     mobile: req.body.mobile,
                     email: req.body.email,
                     password: req.body.password
              }

              adminmodel.create(deta)
                     .then((deta) => {
                            res.status(200).send({ deta: deta });
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
                     res.status(400).send({ massage: "email not match" });
              }
               if(password==admin.password){
                     res.status(200).send({massage:"login successful"})
               }
               else{
                     res.status(400).send({massage:"password  not match"})
               }


       } catch (error) {
              res.status(400).send({ err: error });
       }
})



module.exports = routers;