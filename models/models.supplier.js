var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    supplier_name: {
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    mobileno:{
        type: Number,
        maxlength:10,
        required:true
    },
    goods_name:{
        type:String,
        required:true
    },
    goods_type:{
        type:String,
        required:true
    }

});

var Supplier = mongoose.model('Supplier_info', UserSchema);

module.exports = Supplier;