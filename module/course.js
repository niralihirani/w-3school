const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    course:String
});

const course = mongoose.model('course', student);
module.exports = course;