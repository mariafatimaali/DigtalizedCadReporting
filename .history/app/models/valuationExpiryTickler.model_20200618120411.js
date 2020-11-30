const mongoose = require('mongoose');



const ValuationExpiryTicklerScheema = mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    businessSegment: { type: String, required: false },
    region: { type: String, required: false },
    branchCode: { type: String, required: false },
    branchName: { type: String, required: false },
    nameOfBorrower: { type: String, required: false },
    collateralReference: { type: String, required: false },
    valuationReference: { type: String, required: false },
    descriptionOfProperty: { type: String, required: false },
    dateofLatestValuation: { type: String, required: false },
    valuationConductedBy: { type: String, required: false },
    mVland: { type: Number, required: false },
    mVbuilding: { type: Number, required: false },
    mVplantMachinery: { type: Number, required: false },
    mVother: { type: Number, required: false },
    mVtotal: { type: Number, required: false },
    land: { type: Number, required: false },
    fSValuebuilding: { type: Number, required: false },
    fSplantMachinery: { type: Number, required: false },
    fSother: { type: Number, required: false },
    fStotal: { type: Number, required: false },
    duedateofNextValuation: { type: String, required: false },
    accountStatus: { type: String, required: false },
    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('ValuationExpiryTickler', ValuationExpiryTicklerScheema);





