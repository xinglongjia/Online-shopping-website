const bcrypt =require('bcryptjs');
const config=require('../config/database-users');
var objectId=require('mongodb').ObjectId;
var assert=require('assert');
const mongoose=require('mongoose');
const  User=mongoose.model('User');

module.exports.getUserById=function (id, callback) {
    User.findById(id,callback);
};

module.exports.getUserByUsername=function (username, callback) {
    const  query={username: username};
    User.findOne(query, callback);
};

module.exports.addUser=function (newUser,callback) {
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
};
module.exports.addItemInUser=function (user,product,callback) {//push an item to user's cart in mongodb
    User.update(
        {_id:user.id},
        {$push:{
            cartcontent:{
                name:product.name,
                _id:product._id,
                price:product.price,
                location:product.location,
                description:product.description,
                image:product.image,
                Qty:1
            }
        }
        },callback
    );
};
module.exports.addBookmarkInUser=function (user,product,callback) {//push an item to user's bookmark in mongodb
    User.update(
        {_id:user.id},
        {$push:{
            bookmark:{
                image:product.image,
                name:product.name,
                url:"/detail/"+product._id
            }
        }
        },callback
    );

};

module.exports.addOrderInUser=function (user,product,callback) {
    User.update(
        {_id:user.id},
        {$push:{
            orders:{
                image:product.image,
                name:product.name,
            }
        }
        },callback
    );

};

module.exports.checkItem=function (productname,username,callback) {//check if user has this item in his cart
    const  query={productname: productname};
    User.find({"name":username,"cartcontent.name":productname},callback);//mongo statement
};
module.exports.deleteItem=function (productName,name,callback) {//delete an object in a particular field.
    User.update(
        {"name":name},
        {$pull:{"cartcontent":{"name":productName}}
        },callback);
};
module.exports.deleteBookmark=function (productName,name,callback) {//delete an object in a particular field.
    User.update(
        {"name":name},
        {$pull:{"bookmark":{"name":productName}}
        },callback);
};

module.exports.deleteOrder=function (productName,name,callback) {//delete an object in a particular field.
    User.update(
        {"name":name},
        {$pull:{"orders":{"name":productName}}
        },callback);
};
module.exports.comparePassword=function (candidatePassword,hash,callback) {
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
};