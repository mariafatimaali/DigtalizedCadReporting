const mongoose = require('mongoose');



const limiFeedingPendingReplicaScheema =new mongoose.Schema({

   primeNumber : {type: String, required: true, unique: false},

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },
    nameOfBorrower: { type: String, required: false },
    lastCPExpiryDate : { type: Date, required: false },

    renewalTillExpiryDate : { type: Date, required: false },

    cPApprovalDate : { type: Date, required: false },

    renewedCPReceivedDate : { type: Date, required: false },

    noofdaysPending : { type: String, required: false },

    deficiencyObjection : { type: Date, required: false },

    briefDiscription : { type: String, required: false },

    resolutionDate : { type: Date, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('limiFeedingPendingReplica', limiFeedingPendingReplicaScheema);