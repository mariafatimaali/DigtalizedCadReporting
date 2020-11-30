const LegalReviewTickler = require('../models/legalReviewTickler.model.js');

const LegalReviewTicklerReplica = require('../models/AuditTrail/legalReviewTicklerReplica.model.js');



// Create and Save a new LegalReviewTickler

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }



    console.log("Replication Data")

    // Create a LegalReviewTickler

    const legalReviewTickler = new LegalReviewTickler({

        primeNumber : req.body.primeNumber,

        businessSegment : req.body.businessSegment,

        region : req.body.region,

        branchCode : req.body.branchCode,

        branchName : req.body.branchName,

        rM :req.body.rM,

        tL :req.body.tL,

        nameOfBorrower: req.body.nameOfBorrower,

        dateLegalReview:req.body.dateLegalReview,

        dateNextLegalReviewDue:req.body.dateNextLegalReviewDue,

        legalReviewDoneBy: req.body.legalReviewDoneBy,

        accountStatus : req.body.accountStatus,

        remarks: req.body.remarks,            

        dataStatus : 1,
        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,

    });



   //// Save LegalReviewTickler in the database

    legalReviewTickler.save().then(data => {
       // replicateData(rep, res);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the LegalReviewTickler." + err
        });
    });

};





// Retrieve and return all LegalReviewTickler from the database.

exports.findAll = (req, res) => {

    LegalReviewTickler.find({ dataStatus: 1 })

        .then(legalReviewTickler => {

            res.send(legalReviewTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving LegalReviewTickler."

            });

        });

};



// Find a single LegalReviewTickler with a LegalReviewTicklerId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    LegalReviewTickler.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(legalReviewTickler => {

            if (!legalReviewTickler) {

                return res.status(404).send({

                    message: "LegalReviewTickler not found with id " + req.params.primeNumber

                });

            }

            res.send(legalReviewTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "LegalReviewTickler not found with id " + req.params.legalReviewTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving LegalReviewTickler with id " + req.params.legalReviewTicklerId

            });

        });

};



// Update a LegalReviewTickler identified by the LegalReviewTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "LegalReviewTickler content can not be empty"

        });

    }

    console.log('Request Parameters in update LegalReviewTickler request', req);

    // Find LegalReviewTickler and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    LegalReviewTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(legalReviewTickler => {

            if (!legalReviewTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.legalReviewTicklerId

                });

            }

            res.send(legalReviewTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "LegalReviewTickler not found with id " + req.params.legalReviewTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating LegalReviewTickler with id " + req.params.legalReviewTicklerId

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

            message: "LegalReviewTickler content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     LegalReviewTickler.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(legalReviewTickler => {

         if(!legalReviewTickler) {

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

    const legalReviewTicklerReplica = new LegalReviewTicklerReplica(

        {

        primeNumber : req.body.primeNumber,

        businessSegment : req.body.businessSegment,

        region : req.body.region,

        branchCode : req.body.branchCode,

        branchName : req.body.branchName,

        rM :req.body.rM,

        tL :req.body.tL,

        nameOfBorrower: req.body.nameOfBorrower,

        dateLegalReview:req.body.dateLegalReview,

        dateNextLegalReviewDue:req.body.dateNextLegalReviewDue,

        legalReviewDoneBy: req.body.legalReviewDoneBy,

        accountStatus : req.body.accountStatus,

        remarks: req.body.remarks,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save LegalReviewTickler in the database

    legalReviewTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }





