const mongoose = require('mongoose');



const limiFeedingPendingReplicaScheema =new mongoose.Schema({

   primeNumber : {type: String, required: true, unique: true},

    businessSegment: { type: String, required: true },

    region: { type: String, required: true },

    branchCode: { type: String, required: true },

    branchName: { type: String, required: true },
    nameOfBorrower: { type: String, required: true },
    lastCPExpiryDate : { type: Date, required: true },

    renewalTillExpiryDate : { type: Date, required: true },

    cPApprovalDate : { type: Date, required: true },

    renewedCPReceivedDate : { type: Date, required: true },

    noofdaysPending : { type: String, required: false },

    deficiencyObjection : { type: Date, required: true },

    briefDiscription : { type: String, required: true },

    resolutionDate : { type: Date, required: true },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('limiFeedingPendingReplica', limiFeedingPendingReplicaScheema);