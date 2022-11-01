const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "newauthor"
    },
    publisher: {
        type: ObjectId,
        ref:"newpublisher"
    },
    price: Number,
    ratings: Number,

    isHardCover:{
        type:Boolean,
        default:false
    }

    

}, { timestamps: true });


module.exports = mongoose.model('newbooks', newbookSchema)