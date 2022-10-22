const bookModel= require("../models/bookModel")

const createbookdetail= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getbookdetail= async function (req, res) {
    let allUsers= await bookModel.find()
    res.send({msg: allUsers})
}

module.exports.createbookdetail= createbookdetail
module.exports.getbookdetail= getbookdetail