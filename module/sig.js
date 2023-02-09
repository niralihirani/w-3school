const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    name:String,
    email:String,
    password:String
});

const final = mongoose.model('final', student);
module.exports = final;