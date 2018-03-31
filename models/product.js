const mongoose=require('mongoose');

//Schema
const ProductSchema=mongoose.Schema({// columns and fields in mongodb is case sensitive
    name:{
        type:String
    },
    price:{
        type:String
    },
    location:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
});

 const Product=module.exports=mongoose.model('Product',ProductSchema);//export schema
