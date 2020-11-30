const mongoose = require('mongoose');



const LegalReviewTicklerScheema = mongoose.Schema({

   primeNumber : {type: String, required: true, unique: true},
    businessSegment: { type: String, required: false },
    region: { type: String, required: false },
    branchCode: { type: String, required: false },
    branchName: { type: String, required: false },
    rM :{type : String, required : false},
    tL :{type : String, required : false},
    nameOfBorrower: { type: String, required: false },
    dateLegalReview: { type: String, required: false },
    dateNextLegalReviewDue: { type: String, required: false },
    legalReviewDoneBy: { type: String, required: false },
    accountStatus: { type: String, required: false },
    remarks: { type: String, required: false },
    dataStatus: { type: String, required: false },
    createdBy : { type: String, required: false },
    modifiedBy : { type: String, required: false }



}, {

    timestamps: true

});



module.exports = mongoose.model('LegalReviewTickler', LegalReviewTicklerScheema);

