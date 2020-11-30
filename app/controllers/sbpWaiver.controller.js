const SBPWaiver = require('../models/sbpWaiver.model.js');

const SBPWaiverReplica = require('../models/AuditTrail/sbpWaiverReplica.model.js');




// Create and Save a new SBPWaiver

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }




    console.log("Replication Data");

    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\




    replicateData(req,res);

    // Create a SBPWaiver

    const sbpWaiver = new SBPWaiver({




        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        natureofException : req.body.natureofException,

        aprovalRef : req.body.aprovalRef,

        sBPApprovalLetterDate :req.body.sBPApprovalLetterDate,

        attachment : req.body.attachment,

        dataStatus:"1",
        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
    });




    // Save SBPWaiver in the database

    sbpWaiver.save()

        .then(data => {

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the SBPWaiver." + err




            });

        });







};







// Retrieve and return all SBPWaiver from the database.

exports.findAll = (req, res) => {

    SBPWaiver.find({ dataStatus: 1 })

        .then(sbpWaiver => {

            res.send(sbpWaiver);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving SBPWaiver."

            });

        });

};




// Find a single SBPWaiver with a SBPWaiverId

exports.findOne = (req, res) => {
console.log("request",req);
console.log("hiiii",res);
    var id = req.params.primeNumber

    SBPWaiver.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(sbpWaiver => {

            if (!sbpWaiver) {

                return res.status(404).send({

                    message: "SBPWaiver not found with id " + req.params.primeNumber

                });

            }

            res.send(sbpWaiver);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "SBPWaiver not found with id " + req.params.sbpWaiverId

                });

            }

            return res.status(500).send({

                message: "Error retrieving SBPWaiver with id " + req.params.sbpWaiverId

            });

        });

};




// Update a SBPWaiver identified by the SBPWaiverId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "SBPWaiver content can not be empty"

        });

    }

    console.log('Request Parameters in update SBPWaiver request', req);

    // Find SBPWaiver and update it with the request body




    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req, res);







    SBPWaiver.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(sbpWaiver => {

            if (!sbpWaiver) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.sbpWaiverId

                });

            }

            res.send(sbpWaiver);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "SBPWaiver not found with id " + req.params.sbpWaiverId

                });

            }

            return res.status(500).send({

                message: "Error updating SBPWaiver with id " + req.params.sbpWaiverId

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

            message: "SBPWaiver content can not be empty"

        });

    }




    console.log('before find one and delete query ',req.body.primeNumber);

    

     SBPWaiver.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(sbpWaiver => {

         if(!sbpWaiver) {

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

    const sbpWaiverReplica = new SBPWaiverReplica(

        {

            primeNumber: req.body.primeNumber,

            businessSegment: req.body.businessSegment,

            region: req.body.region,

            branchCode: req.body.branchCode,

            branchName: req.body.branchName,

            nameOfBorrower: req.body.nameOfBorrower,

            natureofException : req.body.natureofException,

            aprovalRef : req.body.aprovalRef,

            sBPApprovalLetterDate :req.body.sBPApprovalLetterDate,

            attachment : req.body.attachment,

            dataStatus: req.body.dataStatus,

            createdBy: req.body.createdBy,

            modifiedBy: req.body.modifiedBy

        });




        sbpWaiverReplica.save()

    .then(data => {

    }).catch(err => {        

    });

    

 }