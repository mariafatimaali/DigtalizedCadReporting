const mongoose = require('mongoose');

const users =  new mongoose.Schema({
    id : Number,
    title: String,
    content: String,
    formtype: String
}, {
    timestamps: true
});

module.exports = mongoose.model('users', users);