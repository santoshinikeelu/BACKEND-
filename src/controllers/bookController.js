const { count } = require("console")
const BookModel= require("../models/bookModel")
const Authorschema= require("../models/authorschema")

//-----------createbook---------------//
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}



//-----------------createauthor-----------//

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await  Authorschema.create(data)
    res.send({msg: savedData})
}

//-------------findbooklist of chetan bhagat--------------//
const getbooks= async function (req, res){
    const author = await  Authorschema.findOne({"author_name":"Chetan Bhagat"})
    const Authorid=author.author_id
    const booklist= await BookModel.find({"author_id":Authorid})
    res.send({msg:booklist})
}
//----------------sol 3------------//

const findbook=async function(req,res){
    const book= await BookModel.findOneAndUpdate({"name":"Two states"},{$set:{"price":"100"}})
    const id= book.author_id
    console.log(id)
    const author= await Authorschema.findOne({author_id:id})
    res.send ({msg:[author.author_name,book.price]})
    
}
//----------------sol 4-----------//

const FindBook = async function (req, res) {
    let allData = await BookModel.find({ price: {$gte: 50 ,$lte:100}} ).select({ author_id :1});
    console.log(allData)
  
    let fetch = allData.map((x) => x.author_id);
    let newData = await Authorschema
      .find({ author_id: fetch })
      .select({ author_name: 1, _id: 0 });
      res.send({msg:newData})
}


const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.createAuthor=createAuthor
module.exports.getbooks=getbooks
module.exports.findbook=findbook
module.exports.FindBook=FindBook