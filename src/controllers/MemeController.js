let axios = require("axios")


let creatememe = async function (req, res) {
    try {
        let templetId  = req.query.template_Id
        let Text0 = req.query.text0
        let Text1 = req.query.text1
        let UserName = req.query.username
        let Password = req.query.password
        
        console.log(`query params are : ${templetId}  ${Text0} ${Text1}  ${UserName}  ${Password}`)
        var options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_Id=${templetId}&text0=${Text0}&text1=${Text1}&username=${UserName}&password=${Password}`,
           // data:[templetId,Text0,Text1,UserName,Password]
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.creatememe = creatememe