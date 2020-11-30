const CPLogBook = require('../models/cplogbookApproved.model.js');



// Create and Save a new CPLogBook

exports.create = (req, res) => {

    // Validate request

    if(!req.body.primeNumber) {

        return res.status(400).send({

            message: "CP loog Book Prime can not be empty"

        });

    }



    // Create a CP Log BOOK

    const cplogbook = new CPLogBook({

        primeNumber:req.body.primeNumber, 

        receivedDateatCAD: req.body.receivedDateatCAD, 

        nameofBusinessSegment: req.body.nameofBusinessSegment, 

        region: req.body.region, 

        branchCode: req.body.branchCode, 

        branchName: req.body.branchName, 

        nameOfBorrower:req.body.nameOfBorrower, 

        cPType:req.body.cPType, 

        facilityType:req.body.facilityType , 

        cPReferenceNo:req.body.cPReferenceNo, 

       // nameOfGroup:req.body.nameOfGroup , 

        cPInitialDate:req.body.cPInitialDate , 

        cPApprovalDate:req.body.cPApprovalDate,

       // cPType:req.body.cPType, 

        approvalLevel: req.body.approvalLevel , 

        nameofRM: req.body.nameofRM , 

        nameofTeamLeader: req.body.nameofTeamLeader, 

        totalFBLimit: req.body.totalFBLimit , 

        totalNFBLimit:req.body.totalNFBLimit, 

        totalLimit:req.body.totalLimit, 

        cpExpiryDate:req.body.cpExpiryDate , 

        temporaryExtensionApprovedupto:req.body.temporaryExtensionApprovedupto, 

        numberofTEApproved:req.body.numberofTEApproved , 

        offerLetterIssuedOn:req.body.offerLetterIssuedOn , 

        offerLetterReceivedOn:req.body.offerLetterReceivedOn,

        financeDocumentIssuedOn:req.body.financeDocumentIssuedOn, 

        financeDocumentReceivedOn: req.body.financeDocumentReceivedOn , 

        discrepanciesMemoNo1IssuedOn: req.body.discrepanciesMemoNo1IssuedOn, 

        discrepanciesMemoNo1ReceivedOn: req.body.discrepanciesMemoNo1ReceivedOn, 

        discrepanciesMemoNo2IssuedOn: req.body.discrepanciesMemoNo2IssuedOn , 

        discrepanciesMemoNo2ReceivedOn:req.body.discrepanciesMemoNo2ReceivedOn, 

        linesReleaseDate:req.body.linesReleaseDate, 

        remarks:req.body.remarks,
        RecordStatus:req.body.RecordStatus,
        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,

    });



    // Save CPLogBook in the database

    cplogbook.save()

    .then(data => {
        res.send(data);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while creating the cplogbook." + err 

            

        });

    });

};





// Retrieve and return all cplogbook from the database.

exports.findAll = (req, res) => {

    CPLogBook.find()

    .then(cplogbook => {

        res.send(cplogbook);

    }).catch(err => {

        res.status(500).send({

            message: err.message || "Some error occurred while retrieving CPLogBook."

        });

    });

};



// Find a single CPLogBook with a CPLogBookId

exports.findOne = (req, res) => {

var id= req.body.primeNumber

CPLogBook.find({primeNumber: req.body.primeNumber})
.then(cplogbook => {
 if(!cplogbook) {
  return res.status(404).send({
 message: "CPLogBook not found with id " + req.params.primeNumber

            });            

        }

        res.send(cplogbook);

    }).catch(err => {

        if(err.kind === 'ObjectId') {

            return res.status(404).send({

                message: "Customer with this primeNumber already exist " + req.params.cplogbookId

            });                

        }

        return res.status(500).send({

            message: "Error retrieving CPLogBook with id " + req.params.cplogbookId

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

    CPLogBook.updateOne({ "primeNumber": req.body.primeNumber }, 

    { $set : req.body},)

    .then(cplogbook => {

        if(!cplogbook) {

            return res.status(404).send({

                message: "Customer Demographic not found with id " + req.params.cplogbookId

            });

        }

        res.send(cplogbook);

    }).catch(err => {

        if(err.kind === 'ObjectId') {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.params.cplogbookId

            });                

        }

        return res.status(500).send({

            message: "Error updating CPLogBook with id " + req.params.cplogbookId

        });

    });

};



// Delete a CPLogBook with the specified CPLogBookId in the request

exports.delete = (req, res) => {

    CPLogBook.findOneAndDelete({ primeNumber : req.params.primeNumber})

    .then(cplogbook => {

        if(!cplogbook) {

            return res.status(404).send({

                message: "CPLogBook not found with id " + req.params.primeNumber

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

            message: "Could not delete CPLogBook with id " + req.params.primeNumber

        });

    });

};