const productModel= require("../models/productModel")

const createproduct= async function (req, res) {
    let data = req.body
    let prices = data.price
    if(!prices) return res.send({msg: 'price is mandatory in the request'})

    let savedData= await productModel.create(data)
    res.send({data: savedData})
}

module.exports.createproduct =createproduct
