const mongoose = require('mongoose');



const CPLogBookSchema = new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    receivedDateatCAD: { type: String, required: false },

    nameofBusinessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    cPType: { type: String, required: false }, 

    facilityType: { type: String, required: false },

    cPReferenceNo: { type: String, required: false },

   // nameOfGroup: { type: String, required: false },

    cPInitialDate: { type: String, required: false },

    cPApprovalDate: { type: String, required: false },

   // cPType: { type: String, required: false },

    approvalLevel: { type: String, required: false },

    nameofRM: { type: String, required: false },

    nameofTeamLeader: { type: String, required: false },

    totalFBLimit: { type: String, required: false },

    totalNFBLimit: { type: String, required: false },

    totalLimit: { type: String, required: false },

    cpExpiryDate: { type: String, required: false },

    temporaryExtensionApprovedupto: { type: String, required: false },

    numberofTEApproved: { type: String, required: false },

    offerLetterIssuedOn: { type: String, required: false },

    offerLetterReceivedOn: { type: String, required: false },

    financeDocumentIssuedOn: { type: String, required: false },

    financeDocumentReceivedOn: { type: String, required: false },

    discrepanciesMemoNo1IssuedOn: { type: String, required: false },

    discrepanciesMemoNo1ReceivedOn: { type: String, required: false },

    discrepanciesMemoNo2IssuedOn: { type: String, required: false },

    discrepanciesMemoNo2ReceivedOn: { type: String, required: false },

    linesReleaseDate: { type: String, required: false },

    remarks: { type: String, required: false },
    RecordStatus: { type: String, required: false },
    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }


}, {

    timestamps: false

});



module.exports = mongoose.model('cplogbookApproved', CPLogBookSchema);