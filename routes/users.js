const express = require('express');
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database-users');

const Productservice=require('../services/product-service');
const Userservice=require('../services/user-service');
const User=require('../models/user');
//register
router.post('/register', (req,res,next) =>{//register method:pass user object to adduser method
    let newUser = new User({
        name:req.body.name,
        email:req.body.email,
        username:req.body.username,
        password:req.body.password
    });
    Userservice.addUser(newUser, (err,user)=>{
        if(err){
            res.json({success:false,msg:'Failed to register new user'});
        }
        else{
            res.json({success:true,msg:'Succeed to register new user'});
        }
    });
});

//authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Userservice.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User not found'});
        }

        Userservice.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // token expires after 1 week
                });

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({success: false, msg: 'Wrong password'});
            }
        });
    });
});

//Profile
router.get('/profile', passport.authenticate('jwt',{session:false}),(req,res,next) =>{
    res.json({user:req.user});
});
//add to cart
router.put('/add-to-cart/:name',(req, res, next) =>{// this way could get data by url,"PUT" and "POST" could transfer a body(which could be an object).
    Productservice.getProductByName(req.params.name,function (err,product) {//get product data first,then add it to user's cart
                    if(err){
                        return err
                    }
                    let user=new User({
                        name:req.body.name,
                        _id:req.body._id,
                        email:req.body.email,
                        username:req.body.username,
                        password:req.body.password,
                        cartcontent:req.body.cartcontent
                    });

                    Userservice.addItemInUser(user,product,function (err) {
                        if(err){
                            return err
                        }
                    });
                });
});
//add to bookmark
router.put('/add-to-bookmark/:name',(req, res, next) =>{
    Productservice.getProductByName(req.params.name,function (err,product) {
        if(err){
            return err
        }
        let user=new User({
            name:req.body.name,
            _id:req.body._id,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            cartcontent:req.body.cartcontent
        });

        Userservice.addBookmarkInUser(user,product,function (err) {
            if(err){
                return err
            }
        });
    });



});

//add to order
router.put('/add-to-order/:name',(req, res, next) =>{
    Productservice.getProductByName(req.params.name,function (err,product) {
        if(err){
            return err
        }
        let user=new User({
            name:req.body.name,
            _id:req.body._id,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password,
            cartcontent:req.body.cartcontent
        });

        Userservice.addOrderInUser(user,product,function (err) {
            if(err){
                return err
            }
        });
    });



});


module.exports = router;