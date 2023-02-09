const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    category:String,
    course:{type: Schema.Types.ObjectId , ref :'course'}
});

const category = mongoose.model('category', student);
module.exports = category;