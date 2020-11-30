const { Int32 } = require('mongodb');
const mongoose = require('mongoose');



const DefandDeferralScheema =  new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    nameofBusinessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfRM: { type: String, required: false },

    nameofTeamLeader: { type: String, required: false },
    customerName: { type: String, required: false },
    totalLimits: { type: String, required: false }, 

    //facilityType: { type: String, required: false },

    detailsOfDocumentationDeficiencies: { type: String, required: false },

    natureOfDocumentationDeficiencies: { type: String, required: false },

    deferral1stApprovalDate : { type: String, required: false },

    deferralLatestApprovalDate: { type: String, required: false },

  

    deferralEffectiveDate: { type: String, required: false },
    deferralExpiryDate: { type: String, required: false },
    noOfDeferrals: { type: String, required: false },

    currentDeferalApprovalLevel: { type: String, required: false },

    dateOfResolution: { type: String, required: false },

    blockedOrOperative: { type: String, required: false },

    accountStatus: { type: String, required: false },

    remarks: { type: String, required: false },

  //  temporaryExtensionApprovedupto: { type: String, required: false },

    dateOfCompletion: { type: String, required: false },

    deferralPeriod: { type: Number, required: false },

    deferralAgeing: { type: Number, required: false },

    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    createdOn: { type: String, required: false },
    modifiedBy : { type: String, required: false },
    modifiedOn  : { type: String, required: false },
    deletedBy: { type: String, required: false },
    deletedOn: { type: String, required: false },

}, {

    timestamps: true

});



module.exports = mongoose.model('DefandDeferral', DefandDeferralScheema); 