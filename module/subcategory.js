const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    subcategory:String,
    course:{type: Schema.Types.ObjectId , ref :'course'},
    category:{type: Schema.Types.ObjectId , ref :'category'}

});

const subcategory = mongoose.model('subcategory', student);
module.exports = subcategory;