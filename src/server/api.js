const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shiva');

const User = require('../models/userInfo');
const Notes = require('../models/task');

router.post('/', function (req, res) {
    User.create({
        userName: req.body.userName,
        eMail: req.body.eMail,
        cell: req.body.cell
    }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })
})

router.get('/:id', function (req, res) {
    User.find({
        eMail: req.params.id
    }, (err, data) => {
        if (err) {
            res.json(err);
        }
        if (data.length > 0)
            res.send(true)
        else
            res.send(false);
    })
})

router.post('/addNote/', function (req, res) {
    Notes.create({
        eMail: req.body.email,
        title: req.body.title,
        content: req.body.note,
        deleteFlg: false,
        createDate: new Date()
    }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data);
    })
})

router.get('/user/:id', function (req, res) {
    User.find({
        eMail: req.params.id
    }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data)
    })
})

router.get('/notes/:id', function (req, res) {
    Notes.find({
        eMail: req.params.id
    }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data)
    })
})

router.delete('/deleteNote/:id', function (req, res) {
    Notes.findByIdAndRemove({
        _id: req.params.id
    }, (err, data) => {
        if (err) {
            res.json(err);
        }
        res.json(data)
    })
})

router.put('/editNote/', function (req, res) {
    Notes.findOneAndUpdate({
        _id: req.body.noteId
    },
        {
            title: req.body.title,
            content: req.body.note,
            deleteFlg: false
        }, (err, data) => {
            if (err) {
                res.json(err);
            }
            res.json(data);
        })
})


module.exports = router;