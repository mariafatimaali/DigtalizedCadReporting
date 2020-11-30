const mongoose = require('mongoose');



const StockReportTicklerReplicaSchema = mongoose.Schema({

    primeNumber: { type: String, required: true },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    rMCreditHub: { type: String, required: false },

    limit: { type: String, required: false },

    stockReportCycle: { type: String, required: false },

    jan: { type: Date, required: false },

    feb: { type: Date, required: false },

    mar: { type: Date, required: false },

    apr: { type: Date, required: false },

    may: { type: Date, required: false },

    june: { type: Date, required: false },

    july: { type: Date, required: false },

    aug: { type: Date, required: false },

    sep: { type: Date, required: false },

    oct: { type: Date, required: false },

    nov: { type: Date, required: false },

    dec: { type: Date, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('StockReportTicklerReplica', StockReportTicklerReplicaSchema);
