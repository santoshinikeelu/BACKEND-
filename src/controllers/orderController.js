const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")

const createorder= async function (req, res) {
    let order = req.body
    let userid=order.user_Id
    let productid=order.product_Id
    console.log(userid)
    let checkuserid= await userModel.findById(userid)
    console.log(checkuserid)
    if(!checkuserid){
        return res.send("Invalid user Id ")
    }
    
    let checkproductid= await productModel.findOne({_id:productid})
    if(!checkproductid){
        return res.send("Invalid product Id")
    }
    let Price = checkproductid.price
    console.log(Price)
    
    
    order.isFreeAppUser=isFreeAppUser
    if(order.isFreeAppUser=="true"){
        order.amount=0
    
    let orderCreated = await orderModel.create(order)
    res.send({data: orderCreated})}

  else (order.isFreeAppUser=="false")
   
  
let Balance =checkuserid .balance
    console.log(Balance)
    if(Price>=Balance){
        return res.send("Insufficient Balance")
    }
    let user1 = await userModel.findOneAndUpdate(
        {_id:userid},
        {$inc:{Balance:-Price}},
        { new: true}
    )
   
        order.amount=Price
       
    
    let orderCr = await orderModel.create(order)
    res.send({msg:orderCr,data:user1})
    console.log(orderCr)
    }
    
module.exports.createorder = createorder
