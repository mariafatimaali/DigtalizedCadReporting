const mongoose = require('mongoose');

const CustomerDemographicSchema = new mongoose.Schema({
    primeNumber: { type: String, required: true, unique: true },
    businessSegment: { type: String, required: true },
    region: { type: String, required: true },
    branchCode: { type: String, required: true },
    branchName: { type: String, required: true },
    nameOfBorrower: { type: String, required: true },
    groupCode: { type: String, required: true },
    nameOfGroup: { type: String, required: true },
    customerStatus: { type: String, required: true },
    cnic: { type: String, required: true },
    sbpCode: { type: String, required: true },
    customerType: { type: String, required: true },
    createdBy : { type: String, required: false },
    createdOn: { type: String, required: false },
    modifiedBy : { type: String, required: false },
    modifiedOn  : { type: String, required: false },
    deletedBy: { type: String, required: false },
    deletedOn: { type: String, required: false },

}, {
    timestamps: true
});

module.exports = mongoose.model('CustomerDemographic', CustomerDemographicSchema);


    
