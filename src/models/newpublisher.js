const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newpublisher = new mongoose.Schema( {
    name: String,
headQuarter: String,

    
   
}, { timestamps: true });


module.exports = mongoose.model('newpublisher',newpublisher )
