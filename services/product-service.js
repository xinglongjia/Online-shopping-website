const mongoose=require('mongoose');
const  Product=mongoose.model('Product');



module.exports.getProductById=function (id, callback) {
    console.log(id);
    Product.findById(mongoose.Types.ObjectId(id),callback);//Transfer string to objectid
};

module.exports.getProductByName=function (name, callback) {
    const  query={name: name};
    Product.findOne(query, callback);
};
