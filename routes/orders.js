const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const  User=require('../models/user');
var objectId=require('mongodb').ObjectId;
const Userservice=require('../services/user-service');
//get items from cartcontent
router.get('/itemsinorder/:name',(req,res,next) => {//select items in cart and return them
    Userservice.getUserByUsername(req.params.name, (err, user) => {
            if(err){
                console.log(err);
            }
            else{
                res.json(user.order);
            }
        });
});
router.put('/deleteorder/:name',(req,res,next)=>{//delete item of particular user in mongodb
    Userservice.deleteOrder(req.params.name,req.body.name,(err,user)=>{
        if (err){
            console.log(err);
        }
        else{
            res.json(user.order);
        }
    })
});
module.exports = router;