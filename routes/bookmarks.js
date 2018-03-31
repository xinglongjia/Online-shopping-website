const express = require('express');
const router = express.Router();
const mongoose=require('mongoose');
const  User=require('../models/user');
var objectId=require('mongodb').ObjectId;
const Userservice=require('../services/user-service');
router.put('/deletebookmark/:name',(req,res,next)=>{//delete item of particular user in mongodb
    Userservice.deleteBookmark(req.params.name,req.body.name,(err,user)=>{
        if (err){
            console.log(err);
        }
        else{
            res.json(user.bookmark);
        }
    })
});
router.get('/itemsinbookmark/:name',(req,res,next) => {//select items in bookmark and return them
    Userservice.getUserByUsername(req.params.name, (err, user) => {
        if(err){
            console.log(err);
        }
        else{
            res.json(user.bookmark);
        }
    });
});
module.exports = router;