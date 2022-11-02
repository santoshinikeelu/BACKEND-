const UserModel= require("../models/userModel")




const basicCode= async function(req, res, next) {
    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
    next()
    }

const createUser= async function (req, res) {
    // Remember that inside request object we already know multiple attributes
    // Examples - body(req.body), query(req.query), params(req.params)
    let body = req.body
    let headers = req.headers
    console.log("The body attribute of this request is: ", body)
    console.log("The headers attribute of thisd request is: ",headers)
    let hostValue = headers.host
    console.log("The host header of this request is: ",hostValue)
    // Bracket notation is safe to use when dealing with keys that have a hyphen
    let contentType = headers["content-Type"]
    console.log("The content type header of this request is: ",contentType)
    let connetion = headers.connection
    console.log("connection of client is:",connetion)
    
    //Set a header in request
    req.headers.year = 2020
    console.log("The updated headers attribute of this request is: ",req.headers)

    res.send({msg: "Hi"})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode