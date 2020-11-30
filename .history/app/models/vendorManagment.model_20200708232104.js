const mongoose = require('mongoose');



const vendorManagmentScheema = new  mongoose.Schema({

    vendorCategory : {type : String, required : true , unique : true},

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

    dateofenlistement : {type : String, required : false},

    dateofReenlistement : {type : String, required : false},

    dateofsuspension : {type : String, required : false},

    dateofdelistment : {type : String, required : false},

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



module.exports = mongoose.model('vendorManagment', vendorManagmentScheema);
