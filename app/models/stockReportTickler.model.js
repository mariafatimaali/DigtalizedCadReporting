const mongoose = require('mongoose');



const StockReportTicklerScheema =  new mongoose.Schema({

    primeNumber: { type: String, required: true, unique: true },

    businessSegment: { type: String, required: false },

    region: { type: String, required: false },

    branchCode: { type: String, required: false },

    branchName: { type: String, required: false },

    nameOfBorrower: { type: String, required: false },

    rMCreditHub: { type: String, required: false },

    limit: { type: String, required: false },

    stockReportCycle: { type: String, required: false },

    jan: { type: String, required: false },

    feb: { type: String, required: false },

    mar: { type: String, required: false },

    apr: { type: String, required: false },

    may: { type: String, required: false },

    june: { type: String, required: false },

    july: { type: String, required: false },

    aug: { type: String, required: false },

    sep: { type: String, required: false },

    oct: { type: String, required: false },

    nov: { type: String, required: false },

    dec: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false },
    year  : { type: String, required: false },
yearly : { type: String, required: false },
st1quater :  { type: String, required: false },
nd2qauter:  { type: String, required: false },
rd3quater:  { type: String, required: false },
th4quater:{ type: String, required: false },
stsemianually :{ type: String, required: false },
ndsemianually:{ type: String, required: false },
createdBy : { type: String, required: false },
createdOn: { type: String, required: false },
modifiedBy : { type: String, required: false },
modifiedOn  : { type: String, required: false },
deletedBy: { type: String, required: false },
deletedOn: { type: String, required: false },
remarks: { type: String, required: false },

}, {

    timestamps: true

});



module.exports = mongoose.model('StockReportTickler', StockReportTicklerScheema);
