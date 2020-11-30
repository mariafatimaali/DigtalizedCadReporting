const mongoose = require('mongoose');



const StockInspectionTicklerReplicaScheema = new mongoose.Schema({

    primeNumber: { type: String, required: true },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    rMCreditHub: { type: String, required: false },

    limit: { type: String, required: false },

    frequency: { type: String, required: false },

    all1QTRConductedBy: { type: String, required: false },

    all1QTRConductedDate: { type: Date, required: false },

    all2QTRConductedBy: { type: String, required: false },

    all2QTRConductedDate: { type: Date, required: false },

    all3QTRConductedBy: { type: String, required: false },

    all3QTRConductedDate: { type: Date, required: false },

    all4QTRConductedBy: { type: String, required: false },

    all4QTRConductedDate: { type: Date, required: false },

    remarks: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('StockInspectionTicklerReplica', StockInspectionTicklerReplicaScheema);

