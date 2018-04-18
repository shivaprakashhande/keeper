const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    eMail: String,
    id: Number,
    title: String,
    content: String,
    deleteFlg: Boolean,
    createDate:Date

})

module.exports = mongoose.model('noteDetail', noteSchema);