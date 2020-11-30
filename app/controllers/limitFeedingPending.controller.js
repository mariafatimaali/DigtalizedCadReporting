
const LimitFeedingPending = require('../models/limiFeedingPending.model.js');

//const LimitFeedingPendingReplica = require('../models/AuditTrail/limitFeedingPendingReplica.model.js');

const LimitFeedingPendingReplica = require ('../models/AuditTrail/limiFeedingPendingReplica.model.js');

// Create and Save a new LimitFeedingPending

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber|| !req.body.branchCode) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }



   

    // Create a LimitFeedingPending

    const limitFeedingPending = new LimitFeedingPending({

        primeNumber : req.body.primeNumber,

        businessSegment : req.body.businessSegment,

        region : req.body.region,

        branchCode : req.body.branchCode,

        branchName : req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        lastCPExpiryDate : req.body.lastCPExpiryDate,

        renewalTillExpiryDate : req.body.renewalTillExpiryDate,

        cPApprovalDate : req.body.cPApprovalDate,

        renewedCPReceivedDate : req.body.renewedCPReceivedDate,

        noofdaysPending : req.body.noofdaysPending,

        deficiencyObjection : req.body.deficiencyObjection,

        briefDiscription : req.body.briefDiscription,

        resolutionDate : req.body.resolutionDate,

        dataStatus : 1,

        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
    });



    // Save LimitFeedingPending in the database

    limitFeedingPending.save()

        .then(data => {

            console.log("Replication Data")

            replicateData(req,res);

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the LimitFeedingPending." + err



            });

        });





};





// Retrieve and return all LimitFeedingPending from the database.

exports.findAll = (req, res) => {

    LimitFeedingPending.find({ dataStatus: 1 })

        .then(limitFeedingPending => {

            res.send(limitFeedingPending);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving LimitFeedingPending."

            });

        });

};



// Find a single LimitFeedingPending with a LimitFeedingPendingId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    LimitFeedingPending.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(limitFeedingPending => {

            if (!limitFeedingPending) {

                return res.status(404).send({

                    message: "LimitFeedingPending not found with id " + req.params.primeNumber

                });

            }

            res.send(limitFeedingPending);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "LimitFeedingPending not found with id " + req.params.limitFeedingPendingId

                });

            }

            return res.status(500).send({

                message: "Error retrieving LimitFeedingPending with id " + req.params.limitFeedingPendingId

            });

        });

};



// Update a LimitFeedingPending identified by the LimitFeedingPendingId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "LimitFeedingPending content can not be empty"

        });

    }

    console.log('Request Parameters in update LimitFeedingPending request', req);

    // Find LimitFeedingPending and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    LimitFeedingPending.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(limitFeedingPending => {

            if (!limitFeedingPending) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.limitFeedingPendingId

                });

            }

            res.send(limitFeedingPending);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "LimitFeedingPending not found with id " + req.params.limitFeedingPendingId

                });

            }

            return res.status(500).send({

                message: "Error updating LimitFeedingPending with id " + req.params.limitFeedingPendingId

            });

        });

};



exports.delete = (req, res) => {



    //<-------------------------------------Audit Trail---------------------------------------------->\\

    req.body.dataStatus = "0";

    console.log(req.body);

    replicateData(req,res);



    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "LimitFeedingPending content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     LimitFeedingPending.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(limitFeedingPending => {

         if(!limitFeedingPending) {

             return res.status(404).send({

                 message: "customer Demographic not found with id " + req.body.primeNumber

             });

         }

         res.send({message: "CPLogBook deleted successfully!"});

     }).catch(err => {

         if(err.kind === 'ObjectId' || err.name === 'NotFound') {

             return res.status(404).send({

                 message: "CPLogBook not found with id " + req.params.primeNumber

             });                

         }

         return res.status(500).send({

             message: "Could not delete CPLogBook with id " + req.body.primeNumber

         });

     });

 };







function replicateData(req,res) {

console.log("into replicated Data");

    const limitFeedingPendingReplica = new LimitFeedingPendingReplica(

        {

        primeNumber : req.body.primeNumber,

        businessSegment : req.body.businessSegment,

        region : req.body.region,

        branchCode : req.body.branchCode,

        branchName : req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        lastCPExpiryDate : req.body.lastCPExpiryDate,

        renewalTillExpiryDate : req.body.renewalTillExpiryDate,

        cPApprovalDate : req.body.cPApprovalDate,

        renewedCPReceivedDate : req.body.renewedCPReceivedDate,

        noofdaysPending : req.body.noofdaysPending,

        deficiencyObjection : req.body.deficiencyObjection,

        briefDiscription : req.body.briefDiscription,

        resolutionDate : req.body.resolutionDate,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save LimitFeedingPending in the database

    limitFeedingPendingReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }



