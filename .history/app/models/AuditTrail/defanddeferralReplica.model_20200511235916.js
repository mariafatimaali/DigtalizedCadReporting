const mongoose = require('mongoose');




const DefandDeferralReplicaScheema = mongoose.Schema({

    primeNumber: { type: String, required: false, unique: false },

    nameofBusinessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfRM: { type: String, required: false },

    nameofTeamLeader: { type: String, required: false },

    totalLimits: { type: String, required: false }, 

    facilityType: { type: String, required: false },

    detailsOfDocumentationDeficiencies: { type: String, required: false },

    natureOfDocumentationDeficiencies: { type: String, required: false },

    deferral1stApprovalDate : { type: Date, required: false },

    deferralLatestApprovalDate: { type: Date, required: false },

    //deferralEffective: { type: String, required: false },

    deferralEffectiveDate: { type: Date, required: false },
    deferralExpiryDate: { type: String, required: false },
    noOfDeferrals: { type: String, required: false },

    currentDeferalApprovalLevel: { type: String, required: false },

    dateOfResolution: { type: Date, required: false },

    blockedOrOperative: { type: String, required: false },

    accountStatus: { type: String, required: false },

    remarks: { type: String, required: false },

    temporaryExtensionApprovedupto: { type: String, required: false },

    dateOfCompletion: { type: Date, required: false },

    deferralPeriod: { type: String, required: false },

    deferralAgeing: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }

}, {

    timestamps: true

});




module.exports = mongoose.model('DefandDeferralReplica', DefandDeferralReplicaScheema);