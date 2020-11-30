const mongoose = require('mongoose');

const CustomerDemographicSchema = mongoose.Schema({
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
    customerType: { type: String, required: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('CustomerDemographic', CustomerDemographicSchema);


    
