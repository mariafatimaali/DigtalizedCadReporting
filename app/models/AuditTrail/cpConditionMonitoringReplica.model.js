const mongoose = require('mongoose');

const CpConditionMonitoringSchema =  new mongoose.Schema({
    primeNumber: { type: String, required: true, unique: true },
    businessSegment: { type: String, required: false },
    region: { type: String, required: false },
    branchCode: { type: String, required: false },
    nameOfBorrower: { type: String, required: false },
    cpApprovalNo: { type: String, required: false },
    cpApprovalDate: { type: Date, required: false },
    dateOfDisbursement: { type: Date, required: false },
    typeOfFacility: { type: String, required: false },
    accountNo: { type: String, required: false },
    conditions: { type: String, required: false },
    dueDate: { type: Date, required: false },
    trackingDate: { type: Date, required: false },
    acctionToBeTaken: { type: String, required: false },
    complianceDate: { type: String, required: false },
    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    modifiedBy : { type: String, required: false }

}, {
    timestamps: true
});

module.exports = mongoose.model('cpConditionMonitoring', CpConditionMonitoringSchema);