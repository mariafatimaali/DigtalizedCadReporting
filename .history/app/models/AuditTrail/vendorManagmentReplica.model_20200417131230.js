const mongoose = require('mongoose');



const vendorManagmentReplicaScheema = mongoose.Schema({

    vendorCategory : {type : String, required : true , unique : false},

    vendorName : {type : String, required : false},

    vendorShortName : {type : String, required : false},

    principalexecutive : {type : String, required : false},

    officeAddress : {type : String, required : false},

    officeTelephone1 : {type : String, required : false},

    officeTelephone2 : {type : String, required : false},

    officeMobile1 : {type : String, required : false},

    officeMobile2 : {type : String, required : false},

    officeemail : {type : String, required : false},

    vendorStatus : {type : String, required : false},

    enlistedonpreferredpanel : {type : String, required : false},

    dateofenlistement : {type : Date, required : false},

    dateofReenlistement : {type : Date, required : false},

    dateofsuspension : {type : Date, required : false},

    dateofdelistment : {type : Date, required : false},

    categoryofHBL : {type : String, required : false},

    valutionLimit : {type : String, required : false},

    enlistedCity : {type : String, required : false},

    Remarks : {type : String, required : false},

    dataStatus: { type: String, required: false },

    createdBy : { type: String, required: false },

    modifiedBy : { type: String, required: false }

    

}, {

    timestamps: true

});



module.exports = mongoose.model('vendorManagmentReplica', vendorManagmentReplicaScheema);