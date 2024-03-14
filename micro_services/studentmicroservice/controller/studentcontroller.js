const express=require('express');
const routers=express.Router();
const bodyparser=require('body-parser');
const studentmodel=require('../../../model/studentmodel');


routers.use(bodyparser.json());

routers.route('/add').post((req,res)=>{
       try{
         let data={
            name:req.body.name,
            lastname:req.body.lastname,
            fathername:req.body.fathername,
            mothername:req.body.mothername,
            mobilenumber:req.body.mobilenumber,
            address:req.body.address,
            permanentaddress:req.body.permanentaddress
         }
          studentmodel.create(data)
          .then((data)=>{
             res.status(200).send({deta:data});
          })

       }catch(err){
           res.status(500).send({massage:err});
       }
})

routers.route('/update/:id').put((req,res)=>{
     //    res.send(req.params.id);
       try{
            let data={
                 name:req.body.name,
                 lastname:req.body.lastname,
                 fathername:req.body.fathername,
                 mothername:req.body.mothername,
                 address:req.body.address,
                 permanentaddress:req.body.permanentaddress,
                 mobilenumber:req.body.mobilenumber,


            }
             studentmodel.findByIdAndUpdate(req.params.id,data)
           .then(updatinstudent=>{
               if(!updatinstudent){
                    return res.status(500).send({massage:"student not found"})
               }
               res.status(200).send({massage:"updating successful",data:updatinstudent});
           })
           .catch(error=>{
                res.status(500).send({massage:"error student updating"})
           })
       }catch(error){
            console.error("error updating student",error);
            res.status(500).send({error:error});
       }
})

  routers.route("/find").get((req,res)=>{
       try {
            studentmodel.find()
            .then(alldeta=>{
               console.log(alldeta);
               if(alldeta.length==0){
                    return res.status(500).send({massage:"student not found"});
               }
            else {
                    res.status(200).send({massage:"deta find successful",deta:alldeta});
               }
            })
            .catch(error=>{
               res.status(500).send({error:error});
            })
       } catch (error) {
            res.status(500).send({error:error});
       }
  })

   routers.route('/find/:id').get((req,res)=>{
        try {
             studentmodel.findById(req.params.id)
             .then(deta=>{
                  if(!deta){
                    return res.status(500).send({massage:"id not found"});
                  }
                  else{
                     res.status(200).send({massage:"deta find successful",deta:deta});
                  }
             })
             .catch(error=>{
               res.status(500).send({massage:"an error occurred",error:error});
             })
        } catch (error) {
             res.status(500).send({massage:"an error occurred",error:error});
        }
   })

   
   routers.route('/delete/:id').delete((req,res)=>{
          try{
               studentmodel.findByIdAndDelete(req.params.id)
               .then(deta=>{
                    console.log(deta);
                    if(deta){
                         return res.status(200).send({massage:"delete successful"});
                    }else{
                         res.status(500).send({massage:"id is not found"});
                    }
               })
               .catch(error=>{
                     res.status(500).send({message:"an is error occurred",err:error.message});
               })
          }catch(error){
                 res.status(500).send({massage:"an error occurred",error:error});
          }
   })
module.exports=routers;
