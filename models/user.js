const mongoose=require('mongoose');
const bcrypt =require('bcryptjs');
const config=require('../config/database-users');
var objectId=require('mongodb').ObjectId;
var assert=require('assert');
//Schema
const UserSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cartcontent:{//including items in cart,which is an product object
        _id:String,
        name:String,
        price:String,
        description:String,
        location:String,
        image:String,
        Qty:String
    },
    bookmark:{//including items in bookmark
        name:String,
        url:String,
        image:String
    },
    orders:{
        name:String,
        image:String,
        qty:String,
    }
});

 const User=module.exports =mongoose.model('User',UserSchema);
