const mongoose = require('mongoose');



const pledgeStockInspectionTicklerScheema = new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: false },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    rMCreditHub: { type: String, required: false },

    limit: { type: String, required: false },

    frequency: { type: String, required: false },

    janConductedBy: { type: String, required: false },

    janDate: { type: String, required: false },

    febConductedBy: { type: String, required: false },

    febDate: { type: String, required: false },

    marchConductedBy: { type: String, required: false },

    marchDate: { type: String, required: false },

    aprilConductedBy: { type: String, required: false },

    aprilDate: { type: String, required: false },

    mayConductedBy: { type: String, required: false },

    mayDate: { type: String, required: false },

    juneConductedBy: { type: String, required: false },

    juneDate: { type: String, required: false },

    julyConductedBy: { type: String, required: false },

    julyDate: { type: String, required: false },

    augustConductedBy: { type: String, required: false },

    augustDate: { type: String, required: false },

    septemberConductedBy: { type: String, required: false },

    septemberDate: { type: String, required: false },

    octoberConductedBy: { type: String, required: false },

    octoberDate: { type: String, required: false },

    novemberConductedBy: { type: String, required: false },

    novemberDate: { type: String, required: false },

    decemberConductedBy: { type: String, required: false },

    decemberDate: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('pledgeStockInspectionTickler', pledgeStockInspectionTicklerScheema);
