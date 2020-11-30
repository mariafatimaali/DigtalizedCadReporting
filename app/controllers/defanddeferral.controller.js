const DefAndDeferral = require('../models/defanddeferral.model.js');

const DefAndDeferralReplica = require('../models/AuditTrail/defanddeferralReplica.model');

// Create and Save a new DefAndDeferral

exports.create = (req, res) => {

    // Validate request

    if(!req.body.primeNumber) {

        return res.status(400).send({

            message: "CP loog Book Prime can not be empty"

        });

    }



    // Create a CP Log BOOK

    const defanddeferral = new DefAndDeferral({

        primeNumber :req.body.primeNumber , 

        nameofBusinessSegment :req.body.nameofBusinessSegment , 

        region :req.body.region , 

        branchCode :req.body.branchCode , 

        branchName :req.body.branchName , 

        nameOfRM :req.body.nameOfRM , 

        nameofTeamLeader :req.body.nameofTeamLeader , 

        totalLimits :req.body.totalLimits , 

        facilityType :req.body.facilityType , 

        detailsOfDocumentationDeficiencies :req.body.detailsOfDocumentationDeficiencies , 

        natureOfDocumentationDeficiencies :req.body.natureOfDocumentationDeficiencies , 

        deferral1stApprovalDate :req.body.deferral1stApprovalDate , 

        deferralLatestApprovalDate :req.body.deferralLatestApprovalDate , 

      //  deferralEffective :req.body.deferralEffective , 

        deferralEffectiveDate :req.body.deferralEffectiveDate , 
        deferralExpiryDate: req.body.deferralExpiryDate ,
        noOfDeferrals :req.body.noOfDeferrals , 

        currentDeferalApprovalLevel :req.body.currentDeferalApprovalLevel , 

        dateOfResolution :req.body.dateOfResolution , 

        blockedOrOperative :req.body.blockedOrOperative , 

        accountStatus :req.body.accountStatus , 

        remarks :req.body.remarks , 

        temporaryExtensionApprovedupto :req.body.temporaryExtensionApprovedupto , 

        dateOfCompletion :req.body.dateOfCompletion , 

        deferralPeriod :req.body.deferralPeriod,

        dataStatus: 1,

        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
    });



    // Save CPLogBook in the database

    defanddeferral.save()

    .then(data => {

        res.send(data);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while creating the cplogbook." + err 

            

        });

    });



    //<-------------------------------------Audit Trail---------------------------------------------->\\

   replicateData(req,res);

};





// Retrieve and return all cplogbook from the database.

exports.findAll = (req, res) => {

    DefAndDeferral.find({dataStatus: 1})

    .then(defanddeferral => {

        res.send(defanddeferral);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while retrieving CPLogBook."

        });

    });

};



// Find a single CPLogBook with a CPLogBookId

exports.findOne = (req, res) => {

var id= req.params.primeNumber

DefAndDeferral.find({primeNumber:id, dataStatus :1 })

    .then(defanddeferral => {

        if(!defanddeferral) {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.params.primeNumber

            });            

        }

        res.send(defanddeferral);

    }).catch(err => {

        if(err.kind === 'ObjectId') {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.params.defanddeferralId

            });                

        }

        return res.status(500).send({

            message: "Error retrieving CPLogBook with id " + req.params.defanddeferralId

        });

    });

};



// Update a CPLogBook identified by the CPLogBookId in the request

exports.update = (req, res) => {

    // Validate Request

    if(!req.body.primeNumber) {

        return res.status(400).send({

            message: "CPLogBook content can not be empty"

        });

    }

    console.log('Request Parameters in update CPLogBook request', req);

    // Find CPLogBook and update it with the request body

    DefAndDeferral.updateOne({ "primeNumber": req.body.primeNumber }, 

    { $set : req.body},)

    .then(defanddeferral => {

        if(!defanddeferral) {

            return res.status(404).send({

                message: "Customer Demographic not found with id " + req.params.defanddeferralId

            });

        }

        res.send(defanddeferral);

    }).catch(err => {

        if(err.kind === 'ObjectId') {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.params.defanddeferralId

            });                

        }

        return res.status(500).send({

            message: "Error updating CPLogBook with id " + req.params.defanddeferralId

        });

    });







    //<-------------------------------------Audit Trail---------------------------------------------->\\

   replicateData(req,res);

};



// Delete a CPLogBook with the specified CPLogBookId in the request

exports.delete = (req, res) => {



   //<-------------------------------------Audit Trail---------------------------------------------->\\

   res.dataStatus = "0";

   replicateDeleteData(req,res);



    DefAndDeferral.findOneAndDelete(req.body.primeNumber)

    .then(defanddeferral => {

        if(!defanddeferral) {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.body.primeNumber

            });

        }

        res.send({message: "CPLogBook deleted successfully!"});

    }).catch(err => {

        if(err.kind === 'ObjectId' || err.name === 'NotFound') {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.body.primeNumber

            });                

        }

        return res.status(500).send({

            message: "Could not delete CPLogBook with id " + req.body.primeNumber

        });

    });

};





function replicateData(req,res)

{



    const defanddeferralReplica = new DefAndDeferralReplica({

        primeNumber :req.body.primeNumber , 

        nameofBusinessSegment :req.body.nameofBusinessSegment , 

        region :req.body.region , 

        branchCode :req.body.branchCode , 

        branchName :req.body.branchName , 

        nameOfRM :req.body.nameOfRM , 

        nameofTeamLeader :req.body.nameofTeamLeader , 

        totalLimits :req.body.totalLimits , 

        facilityType :req.body.facilityType , 

        detailsOfDocumentationDeficiencies :req.body.detailsOfDocumentationDeficiencies , 

        natureOfDocumentationDeficiencies :req.body.natureOfDocumentationDeficiencies , 

        deferral1stApprovalDate :req.body.deferral1stApprovalDate , 

        deferralLatestApprovalDate :req.body.deferralLatestApprovalDate , 

      //  deferralEffective :req.body.deferralEffective , 

        deferralEffectiveDate :req.body.deferralEffectiveDate , 
        deferralExpiryDate :req.body.deferralEffectiveDate , 
        noOfDeferrals :req.body.noOfDeferrals , 

        currentDeferalApprovalLevel :req.body.currentDeferalApprovalLevel , 

        dateOfResolution :req.body.dateOfResolution , 

        blockedOrOperative :req.body.blockedOrOperative , 

        accountStatus :req.body.accountStatus , 

        remarks :req.body.remarks , 

        temporaryExtensionApprovedupto :req.body.temporaryExtensionApprovedupto , 

        dateOfCompletion :req.body.dateOfCompletion , 

        deferralPeriod :req.body.deferralPeriod,

        dataStatus: "1",

        createdBy :req.body.createdBy,

        modifiedBy :req.body.modifiedBy  

    });



    // Save CPLogBook in the database

    defanddeferralReplica.save()

    .then(data => {

        res.send(data);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while creating the cplogbook." + err 

            

        });

    });



};



function replicateDeleteData(req,res)

{



    const defanddeferralReplica = new DefAndDeferralReplica({

        primeNumber :req.body.primeNumber , 

        nameofBusinessSegment :req.body.nameofBusinessSegment , 

        region :req.body.region , 

        branchCode :req.body.branchCode , 

        branchName :req.body.branchName , 

        nameOfRM :req.body.nameOfRM , 

        nameofTeamLeader :req.body.nameofTeamLeader , 

        totalLimits :req.body.totalLimits , 

        facilityType :req.body.facilityType , 

        detailsOfDocumentationDeficiencies :req.body.detailsOfDocumentationDeficiencies , 

        natureOfDocumentationDeficiencies :req.body.natureOfDocumentationDeficiencies , 

        deferral1stApprovalDate :req.body.deferral1stApprovalDate , 

        deferralLatestApprovalDate :req.body.deferralLatestApprovalDate , 

      //  deferralEffective :req.body.deferralEffective , 

        deferralEffectiveDate :req.body.deferralEffectiveDate , 
        deferralExpiryDate :req.body.deferralExpiryDate , 
        noOfDeferrals :req.body.noOfDeferrals , 

        currentDeferalApprovalLevel :req.body.currentDeferalApprovalLevel , 

        dateOfResolution :req.body.dateOfResolution , 

        blockedOrOperative :req.body.blockedOrOperative , 

        accountStatus :req.body.accountStatus , 

        remarks :req.body.remarks , 

        temporaryExtensionApprovedupto :req.body.temporaryExtensionApprovedupto , 

        dateOfCompletion :req.body.dateOfCompletion , 

        deferralPeriod :req.body.deferralPeriod,

        dataStatus: "0",

        createdBy :req.body.createdBy,

        modifiedBy :req.body.modifiedBy  

    });



    // Save CPLogBook in the database

    defanddeferralReplica.save()

    .then(data => {

        res.send(data);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while creating the cplogbook." + err 

            

        });

    });



};