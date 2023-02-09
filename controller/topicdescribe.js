var express = require('express');
let topicdescribe = require('../module/topic-describe');

exports.addtopicdescribe = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await topicdescribe.create(req.body)
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
exports.deletetopicdescribe = async function (req, res, next) {
    try {
        let id = req.query.id
        let data = await topicdescribe.findByIdAndDelete(id)
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
exports.updatetopicdescribe = async function (req, res, next) {
    try {
        let eid = req.query.eid
        let data = await topicdescribe.findByIdAndUpdate(eid, req.body)
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
exports.showtopicdescribe = async function (req, res, next) {
    try {
        let data = await topicdescribe.find().populate(['course','category','subcategory','topic'])
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