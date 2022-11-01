const newauthor= require("../models/newauthor.js")

const createauthor= async function (req, res) {
    let author = req.body
    // console.log(author)
    let authorCreated = await newauthor.create(author)
    console.log(authorCreated)
    res.send({msg : authorCreated})
}


module.exports.createauthor = createauthor