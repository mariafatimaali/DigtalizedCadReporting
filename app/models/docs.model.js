const mongoose = require('mongoose');

const DocSchema =new mongoose.Schema({
    primeNumber: String,
 
}, {
    timestamps: true
});

module.exports = mongoose.model('branches', DocSchema);