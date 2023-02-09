var express = require('express');
let subcategory = require('../module/subcategory');

exports.addsubcategory = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await subcategory.create(req.body)
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
exports.deletesubcategory = async function (req, res, next) {
    try {
        let id = req.query.id
        let data = await subcategory.findByIdAndDelete(id)
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
exports.updatesubcategory = async function (req, res, next) {
    try {
        let eid = req.query.eid
        let data = await subcategory.findByIdAndUpdate(eid, req.body)
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
exports.showsubcategory = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await subcategory.find().populate(['course','category'])
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