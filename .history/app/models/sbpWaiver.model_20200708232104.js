const mongoose = require('mongoose');




const SBPWaiverSchema = new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    natureofException : { type: String, required: false },

    aprovalRef : { type: String, required: false },

    sBPApprovalLetterDate : { type: String, required: false },

    attachment : { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }




}, {

    timestamps: true

});




module.exports = mongoose.model('SBPWaiver', SBPWaiverSchema);