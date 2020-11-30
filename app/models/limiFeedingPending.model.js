const mongoose = require('mongoose');



const limiFeedingPendingScheema = new mongoose.Schema({

   primeNumber : {type: String, required: true, unique: true},
    businessSegment: { type: String, required: true },
    region: { type: String, required: true },
    branchCode: { type: String, required: true },
    branchName: { type: String, required: true },
    nameOfBorrower: { type: String, required: true },
    lastCPExpiryDate : { type: String, required: true },
    renewalTillExpiryDate : { type: String, required: true },
    cPApprovalDate : { type: String, required: true },
    renewedCPReceivedDate : { type: String, required: true },
    noofdaysPending : { type: String, required: true },
    deficiencyObjection : { type: String, required: true },
    briefDiscription : { type: String, required: true },
    resolutionDate : { type: String, required: true },
    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('limiFeedingPending', limiFeedingPendingScheema);
