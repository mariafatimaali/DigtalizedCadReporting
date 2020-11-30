const mongoose = require('mongoose');

const roles = new mongoose.Schema({
    userid : {
        type: String,
        unique: true
    },
    view: String,
    edit: String,
    delete: String,
    role:String,
    active  : String
}, {
    timestamps: true
});

module.exports = mongoose.model('roles', roles);