const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const pinataSchema = new Schema({
    url:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('pinata', pinataSchema);;
