const mongoose = require('mongoose');

const BranchesSchema = mongoose.Schema({
    BranchName: String,
    BranchCode: String
}, {
    timestamps: true
});

module.exports = mongoose.model('branches', BranchesSchema);