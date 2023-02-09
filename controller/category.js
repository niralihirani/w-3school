var express = require('express');
let category = require('../module/category');

exports.addcategory = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await category.create(req.body)
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
exports.deletecategory = async function (req, res, next) {
    try {
        // console.log(req.body);
        let id = req.query.id
        let data = await category.findByIdAndDelete(id)
        res.status(201).json({
            status: 'delete',
            message: 'delete successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.updatecategory = async function (req, res, next) {
    try {
        // console.log(req.body);
        let eid = req.query.eid
        let data = await category.findByIdAndUpdate(eid , req.body)
        res.status(201).json({
            status: 'Update',
            message: 'Update successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}
exports.showcategory = async function (req, res, next) {
    try {
        let data = await category.find().populate('course')
        res.status(201).json({
            status: 'show',
            message: 'show successfull',
            data: data
        })
    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error.message
        })
    }
}