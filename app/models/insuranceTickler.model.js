const mongoose = require('mongoose');




const InsuranceTicklerSchema = new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    nameofInsuranceCo: { type: String, required: false },

    policyNo: { type: String, required: false },

    totalSumInsured: { type: String, required: false },

    hBLShare: { type: String, required: false },

    nameofCoInsurance: { type: String, required: false },

    hBLCoInsuranceAmount: { type: String, required: false },

    stocksHypo: { type: String, required: false },

    stocksPledge: { type: String, required: false },

    building: { type: String, required: false },

    machinery: { type: String, required: false },

    other: { type: String, required: false },

    expiryDate: { type: String, required: false },
    pPRStaus: { type: String, required: false },
    pPRUptillDate: { type: String, required: false },
    nextPremiumDueDate: { type: String, required: false },
    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    modifiedBy : { type: String, required: false }




}, {

    timestamps: true

});




module.exports = mongoose.model('InsuranceTickler', InsuranceTicklerSchema);