const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const {ObjectId,model, isValidObjectId} =require("mongoose")

const createorder= async function (req, res) {
    let order = req.body
    let userid=order. user_Id
    let productid=order.product_Id
    if(!isValidObjectId(userid)){
        return res.send({message:"user_id is not a validobject id"})
       }
       if(!isValidObjectId(productid)){
        return res.send({message:"product_id  is not a validobject id"})
       }

    
    let orderCreated = await orderModel.create(order)
    res.send({data: orderCreated})
    }

   

module.exports.createorder = createorder
