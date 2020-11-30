const mongoose = require('mongoose');

const BranchesSchema =new mongoose.Schema({
    BranchName: String,
    BranchCode: String
}, {
    timestamps: true
});

module.exports = mongoose.model('branches', BranchesSchema);