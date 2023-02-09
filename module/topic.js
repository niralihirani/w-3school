const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    topic :String,
    course:{type: Schema.Types.ObjectId , ref :'course'},
    category:{type: Schema.Types.ObjectId , ref :'category'},
    subcategory:{type: Schema.Types.ObjectId , ref :'subcategory'}

});

const  topic = mongoose.model('topic', student);
module.exports =  topic;