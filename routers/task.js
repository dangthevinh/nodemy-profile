const express = require('express')
var router = express.Router()
const TaskModel = require('../models/task')

function convertStringToDate(stringDate) {
    var arr = stringDate.split('-')
    var year = parseInt(arr[2])
    var month = parseInt(arr[1])
    var date = (arr[0], )

    return new Date(arr[1] - 1, arr[0] + 1)
}

router.get('/', (req, res, next) => {
    TaskModel.find({})
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.post('/', (req, res, next) => {
    TaskModel.create({
            title: req.body.title,
            deadline: req.body.deadline
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.put('/:id', (req, res, next) => {
    var newData = {}
    if (req.body.newTitle) newData.title = req.body.newTitle;
    if (req.body.newDeadline) newData.deadline = convertStringToDate(req.)

    TaskModel.put({

        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

router.delete('/', (req, res, next) => {
    TaskModel.deleteOne({
            _id: req.params.id
        })
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router