
const newauthor = require("../models/newauthor.js")
const newbook= require("../models/newbook.js")
const newpublisher = require("../models/newpublisher.js")


const createbook= async function (req, res) {
    let book = req.body
    // console.log(author)
    let bookCreated = await newbook.create(book).populate('author')
    
    res.send({msg : bookCreated})
}
const createbook1= async function (req, res) {
    let book = req.body
    let author_id=book.author
    let publisher_id=book.publisher
    
   
   if(!author_id){
      return res.send("author is required")
   }
   if(!publisher_id){
    return res.send("publisher is required")
 }
   if(!isValidObjectId(author_id)){
    return res.send({message:"author_id is not a validobject id"})
   }
   if(!isValidObjectId(publisher_id)){
    return res.send({message:"publisher_id  is not a validobject id"})
   }

     let bookCreated = await newbook.create(book)
    res.send({data: bookCreated})

   
}

const getallbookdata= async function (req, res) {
    let books = await newbook.find()
    res.send({data: books})
}
const getauthorsdata = async function (req, res) {
    let specificBook = await newbook.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}
//  question  4

const question4= async function (req, res) {
   
    let obj1 = await newpublisher.findOne({name: "santoshini" })
    let id1 = obj1.bdc234d240e6c8101fff4
    let obj2 = await newpublisher.findOne({name: "rahul" })
    let id2 = obj2.bdc3a4d240e6c8101fff6

    let NEWBOOK = await newbook.updateMany(
        {publisher:[id1,id2]},
        {  $set: {"ishardcover":true} },
        {new:true}
        )
    let updatedbooks = await newbook.find({"ishardcover":true})
    res.send({data:updatedbooks})
}


//question  5


const question5= async function (req, res) {
    
    let arr1 = await newauthor.find({rating:{$gt: 3.5} })
    let newarr=[]
    for(i of arr1){
        iid=i.bd23666a3e6f0b8f12f70
      
       let tosend= await newbook.findOneAndUpdate(
            {author:iid},
            {$inc:{"price":10}},
            {new:true} 
        )
        newarr.push(tosend)
    }
    res.send({msg:newarr})
    
    
}




module.exports. createbook = createbook
module.exports.createbook1 = createbook1
module.exports.getallbookdata = getallbookdata
module.exports.getauthorsdata = getauthorsdata
module.exports.question4 = question4
module.exports.question5 = question5