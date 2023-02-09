const { Error } = require('mongoose');
let final = require('../module/sig');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


exports.sequre = async function (req, res, next) {
    try {
        console.log(req.headers.token);
        let token = req.headers.token
        if(!token){
            throw new Error('token is not found')
        }
        let  decoded =await jwt.verify(token, 'hello');
        // console.log(decoded);

        let checkuser = await final.findById(decoded.id)
        if(!checkuser){
            throw new Error('user is not found')
        }
       next()
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.sigup =  async function (req, res, next) {
    try {
        // console.log(req.body);
        if(!req.body.name || !req.body.email){
            throw new Error('data is not filed')
        }
        if(req.body.password != req.body.password ){
            throw new Error('pass is not match')
        }
        req.body.password = await bcrypt.hash(req.body.password, 10)

        let data = await final.create(req.body)
        var token = jwt.sign({ id : data._id }, 'hello');
        res.status(201).json({
            status: 'add',
            message: 'added successfull',
            data: data,
            token
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}

exports.login =  async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await final.findOne({email : req.body.email})
        if(!data){
            throw new Error('user is not filed')
        }
        req.body.password = await bcrypt.hash(req.body.password, 10)

        var token = jwt.sign({ id : data._id }, 'hello');

        res.status(201).json({
            status: 'add',
            message: 'added successfull',
            data: data,token
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}