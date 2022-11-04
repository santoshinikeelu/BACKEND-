const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const orderSchema = new mongoose.Schema( {
    user_Id:{
        type: ObjectId,
        ref: "newUser"
    },  
	product_Id: {
        type: ObjectId,
        ref: "product"
    }, 
	amount:Number,
	isFreeAppUser:{
        type:Boolean,
        default:false
    } , 
	date: String
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
