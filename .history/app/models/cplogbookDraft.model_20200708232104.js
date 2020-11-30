const mongoose = require('mongoose');




const CPLogBookDraftSchema = new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: false },
    receiveddateatCAD: { type: String, required: true },
    nameofBusinessSegment: { type: String, required: false },
    region: { type: String, required: false },
    branchName: { type: String, required: false },
    nameOfBorrower: { type: String, required: false },
    facilityType: { type: String, required: false },
    cPReferenceNo: { type: String, required: false },
    dateReturnedToBussiness: { type: String, required: false },
    daetResubmittedbyBussiness: { type: String, required: false },
    dateSenttoHOK: { type: String, required: false },
    dateApprovalReceived: { type: String, required: false },
    remarks: { type: String, required: false }

}, {

    timestamps: false

});




module.exports = mongoose.model('cplogbookDraft', CPLogBookDraftSchema);


