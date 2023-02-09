var express = require('express');
let course = require('../module/course');

exports.addcourse = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await course.create(req.body)
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
exports.deletecourse = async function (req, res, next) {
    try {
        let id = req.query.id
        let data = await course.findByIdAndDelete(id)
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
exports.updatecourse = async function (req, res, next) {
    try {
        let eid = req.query.eid
        let data = await course.findByIdAndUpdate(eid, req.body)
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
exports.showcourse = async function (req, res, next) {
    try {
        // console.log(req.body);
        let data = await course.find()
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