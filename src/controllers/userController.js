
const UserModel= require("../models/userModel")
const { use } = require("../routes/route")


const createUser= async function (req, res) {
    let data= req.body
   
    let savedData= await  UserModel.create(data)
    res.send({msg: savedData})
}

module.exports.createUser = createUser

