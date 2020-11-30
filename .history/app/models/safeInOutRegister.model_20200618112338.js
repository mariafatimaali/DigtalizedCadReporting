const mongoose = require('mongoose');




const SafeInOutRegisterSchema = mongoose.Schema({

    primeNumber: { type: String, required: true },

    receivedDateAtCAD :{type: String, required : false},

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    collateralReference: { type: String, required: false },

    collateralTypeDescription: { type: String, required: false },

    detailofCollateral: { type: String, required: false },

    safeinDate: { type: String, required: false },

    temporarySafeoutDate: { type: String, required: false },

    permanentSafeoutDate: { type: String, required: false },

    acknowledgementReceiptOfBorrower: { type: String, required: false },

    remarks: { type: String, required: false },

    listofDocuments: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }




}, {

    timestamps: true

});




module.exports = mongoose.model('SafeInOutRegister', SafeInOutRegisterSchema);
