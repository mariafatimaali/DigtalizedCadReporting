const mongoose = require('mongoose');



const limiFeedingPendingScheema = mongoose.Schema({

   primeNumber : {type: String, required: true, unique: true},
    businessSegment: { type: String, required: false },
    region: { type: String, required: false },
    branchCode: { type: String, required: false },
    branchName: { type: String, required: false },
    nameOfBorrower: { type: String, required: false },
    lastCPExpiryDate : { type: String, required: false },
    renewalTillExpiryDate : { type: String, required: false },
    cPApprovalDate : { type: String, required: false },
    renewedCPReceivedDate : { type: String, required: false },
    noofdaysPending : { type: String, required: false },
    deficiencyObjection : { type: String, required: false },
    briefDiscription : { type: String, required: false },
    resolutionDate : { type: String, required: false },
    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('limiFeedingPending', limiFeedingPendingScheema);
