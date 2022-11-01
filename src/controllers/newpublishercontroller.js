const newpublisher= require("../models/newpublisher.js")

const createpublisher= async function (req, res) {
    let author = req.body
    // console.log(author)
    let publisherCreated = await newpublisher.create(author)
    
    res.send({msg : publisherCreated})
}


module.exports.createpublisher = createpublisher