var express = require('express');
let topic = require('../module/topic');

exports.addtopic = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await topic.create(req.body)
        res.status(201).json({
            status: 'add',
            message: 'added successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.deletetopic = async function (req, res, next) {
    try {
        let id = req.query.id
        let data = await topic.findByIdAndDelete(id)
        res.status(201).json({
            status: 'add',
            message: 'added successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.updatetopic = async function (req, res, next) {
    try {
        let eid = req.query.eid
        let data = await topic.findByIdAndUpdate(eid, req.body)
        res.status(201).json({
            status: 'add',
            message: 'added successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.showtopic = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await topic.find().populate(['course','category','subcategory'])
        res.status(201).json({
            status: 'add',
            message: 'added successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}