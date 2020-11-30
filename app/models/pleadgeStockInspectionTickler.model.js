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
jointInspection:{type :String, required:false},
    janConductedBy: { type: String, required: false },
    janConductedByOutsource: { type: String, required: false },
    janDate: { type: String, required: false },

    febConductedBy: { type: String, required: false },
    febConductedByOutsource: { type: String, required: false },

    febDate: { type: String, required: false },

    marchConductedBy: { type: String, required: false },
    marchConductedByOutsource: { type: String, required: false },

    marchDate: { type: String, required: false },

    aprilConductedBy: { type: String, required: false },
    aprilConductedByOutsource: { type: String, required: false },

    aprilDate: { type: String, required: false },

    mayConductedBy: { type: String, required: false },
    mayConductedByOutsource: { type: String, required: false },
    

    mayDate: { type: String, required: false },

    juneConductedBy: { type: String, required: false },
    juneConductedByOutsource: { type: String, required: false },

    juneDate: { type: String, required: false },

    julyConductedBy: { type: String, required: false },
    julyConductedByOutsource: { type: String, required: false },
    julyDate: { type: String, required: false },

    augustConductedBy: { type: String, required: false },
    augustConductedByOutsource: { type: String, required: false },

    augustDate: { type: String, required: false },

    septemberConductedBy: { type: String, required: false },
    septemberConductedByOutsource: { type: String, required: false },
    septemberDate: { type: String, required: false },

    octoberConductedBy: { type: String, required: false },
    octoberConductedByOutsource: { type: String, required: false },
    octoberDate: { type: String, required: false },

    novemberConductedBy: { type: String, required: false },
    novemberConductedByOutsource: { type: String, required: false },
    novemberDate: { type: String, required: false },

    decemberConductedBy: { type: String, required: false },
    decemberConductedByOutsource: { type: String, required: false },
    decemberDate: { type: String, required: false },

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false },

    year  : { type: String, required: false },


    yearly : { type: String, required: false },
    yearlyDate  :{ type: String, required: false },
    yearlyOutsource : { type: String, required: false },
    st1quater :  { type: String, required: false },
    st1quaterOutsource :  { type: String, required: false },
    st1quaterDate :  { type: String, required: false },
    nd2qauter:  { type: String, required: false },
    nd2qauterOutsource:  { type: String, required: false },
    nd2qauterDate:  { type: String, required: false },
    rd3quater:  { type: String, required: false },
    rd3quaterOutsource:  { type: String, required: false },
    rd3quaterDate:  { type: String, required: false },
    th4quater:{ type: String, required: false },
    th4quaterOutsource:{ type: String, required: false },
    th4quaterDate:{ type: String, required: false },
    stsemianually :{ type: String, required: false },
    stsemianuallyOutsource :{ type: String, required: false },
    stsemianuallyDate :{ type: String, required: false },
    ndsemianually:{ type: String, required: false },
    ndsemianuallyOutsource:{ type: String, required: false },
    ndsemianuallyDate:{ type: String, required: false },
    createdBy : { type: String, required: false },
    createdOn: { type: String, required: false },
    modifiedBy : { type: String, required: false },
    modifiedOn  : { type: String, required: false },
    deletedBy: { type: String, required: false },
    deletedOn: { type: String, required: false },
}, {

    timestamps: true

});



module.exports = mongoose.model('pledgeStockInspectionTickler', pledgeStockInspectionTicklerScheema);
