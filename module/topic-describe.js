const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    topicdescribe :String,
    course:{type: Schema.Types.ObjectId , ref :'course'},
    category:{type: Schema.Types.ObjectId , ref :'category'},
    subcategory:{type: Schema.Types.ObjectId , ref :'subcategory'},
    topic:{type: Schema.Types.ObjectId , ref :'topic'}
});

const  topicdescribe = mongoose.model('topicdescribe', student);
module.exports =  topicdescribe;