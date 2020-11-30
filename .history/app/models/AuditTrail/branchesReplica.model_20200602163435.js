
const mongoose = require('mongoose');

const BranchesReplicaSchema = mongoose.Schema({
    BranchName: String,
    BranchCode: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Note', BranchesReplicaSchema);