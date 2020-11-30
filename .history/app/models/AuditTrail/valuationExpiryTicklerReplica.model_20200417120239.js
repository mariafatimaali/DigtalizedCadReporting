const mongoose = require('mongoose');



const CPLogBookDraftReplicaSchema = mongoose.Schema({

    primeNumber: { type: String, required: true, unique: false },

    receiveddateatCAD: { type: Date, required: true },

    nameofBusinessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    facilityType: { type: String, required: false },

    cPReferenceNo: { type: String, required: false },

    ifapplicable: {type : Boolean,required : false},

    dateReturnedToBussiness: { type: Date, required: false },

    daetResubmittedbyBussiness: { type: Date, required: false },

    dateSenttoHOK: { type: Date, required: false },

    dateApprovalReceived: { type: Date, required: false },

    remarks: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }

}, {

    timestamps: false

});



module.exports = mongoose.model('cplogbookDraftReplica', CPLogBookDraftReplicaSchema);