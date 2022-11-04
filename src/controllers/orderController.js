const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const {ObjectId,model, isValidObjectId} =require("mongoose")

const createorder= async function (req, res) {
    
    let userid=req.body.user_Id
    let productid=req.body.product_Id
    console.log(userid)
    
    if(!isValidObjectId(userid)){
        return res.send("Invalid user Id ")
    }

    if(!isValidObjectId(productid)){
        return res.send("Invalid product Id")
    }
        let checkproductid= await productModel.findById(productid)
    let Price = checkproductid.price
    let order=req.body
    console.log(Price)
    
    order.isFreeAppUser=isFreeAppUser
    if(order.isFreeAppUser==="true"){
       let result= order.amount=0
        console.log(result)
        let orderCreated = await orderModel.create(order)
        res.send({data: orderCreated})
    }
    else{
    

 
    let checkuserid= await userModel.findById(userid)
let Balance = checkuserid.balance
    
   
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
    
} 
module.exports.createorder = createorder
