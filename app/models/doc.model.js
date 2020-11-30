const mongoose = require('mongoose');

const docSchema =new mongoose.Schema({
    primeNumber: String,
 
}, {
    timestamps: true
});


module.exports = mongoose.model('doc', docSchema);