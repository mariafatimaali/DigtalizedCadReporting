const mongoose = require('mongoose');



const PledgeJointStockInspectionTicklerScheema =  new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    rMCreditHub: { type: String, required: false },

    limit: { type: String, required: false },

    frequency: { type: String, required: false },

    marchConductedBy: { type: String, required: false },

    marchConductedDate: { type: String, required: false },

    juneConductedBy: { type: String, required: false },

    juneConductedDate: { type: String, required: false },

    sepConductedBy: { type: String, required: false },

    sepConductedDate: { type: String, required: false },

    decConductedBy: { type: String, required: false },

    decConductedDate: { type: String, required: false },

    remarks: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('PledgeJointStockInspectionTickler', PledgeJointStockInspectionTicklerScheema);

