const CPLogBookDraft = require('../models/cplogbookDraft.model.js');

 




// Create and Save a new CPLogBookDraft

 

exports.create = (req, res) => {

 

    // Validate request

 

    if(!req.body.primeNumber) {

 

        return res.status(400).send({

 

            message: "CP loog Book Prime can not be empty"

 

        });

 

    }

 




    // Create a CP Log BOOK

 

    const cplogbookdraft = new CPLogBookDraft({

 

        primeNumber:req.body.primeNumber, 

 

        receiveddateatCAD: req.body.receiveddateatCAD , 

 

        nameofBusinessSegment: req.body.nameofBusinessSegment , 

 

        region: req.body.region, 

 

        branchCode: req.body.branchCode , 

 

        branchName: req.body.branchName , 

 

        nameOfBorrower:req.body.nameOfBorrower, 

 

        cPType:req.body.cPType, 

 

        facilityType:req.body.facilityType , 

 

        cPReferenceNo:req.body.cPReferenceNo, 

 

        dateReturnedToBussiness :req.body.dateReturnedToBussiness,

 

        daetResubmittedbyBussiness :req.body.daetResubmittedbyBussiness,

 

        dateSenttoHOK :req.body.dateSenttoHOK,

 

        dateApprovalReceived :req.body.dateReturnedToBussiness,

 

        remarks:req.body.remarks,
        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
    

 

        });

 




    // Save CPLogBook in the database

 

    cplogbookdraft.save()

 

    .then(data => {

 

        res.send(data);

 

    }).catch(err => {

 

        res.status(500).send({

 

            message: err.message || "Some error occurred while creating the cplogbookdraft." + err 

 

            

 

        });

 

    });

 

};

 







// Retrieve and return all cplogbookdraft from the database.

 

exports.findAll = (req, res) => {

 

    CPLogBookDraft.find()

 

    .then(cplogbookdraft => {

 

        res.send(cplogbookdraft);

 

    }).catch(err => {

 

        res.status(500).send({

 

            message: err.message || "Some error occurred while retrieving CPLogBook."

 

        });

 

    });

 

};

 




// Find a single CPLogBook with a CPLogBookId

 

exports.findOne = (req, res) => {

 

var id= req.params.primeNumber

 

CPLogBookDraft.find({primeNumber:id})

 

    .then(cplogbookdraft => {

 

        if(!cplogbookdraft) {

 

            return res.status(404).send({

 

                message: "CPLogBook not found with id " + req.params.primeNumber

 

            });            

 

        }

 

        res.send(cplogbookdraft);

 

    }).catch(err => {

 

        if(err.kind === 'ObjectId') {

 

            return res.status(404).send({

 

                message: "CPLogBook not found with id " + req.params.cplogbookdraftId

 

            });                

 

        }

 

        return res.status(500).send({

 

            message: "Error retrieving CPLogBook with id " + req.params.cplogbookdraftId

 

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

 

    CPLogBookDraft.updateOne({ "primeNumber": req.body.primeNumber }, 

 

    { $set : req.body},)

 

    .then(cplogbookdraft => {

 

        if(!cplogbookdraft) {

 

            return res.status(404).send({

 

                message: "Customer Demographic not found with id " + req.params.cplogbookdraftId

 

            });

 

        }

 

        res.send(cplogbookdraft);

 

    }).catch(err => {

 

        if(err.kind === 'ObjectId') {

 

            return res.status(404).send({

 

                message: "CPLogBook not found with id " + req.params.cplogbookdraftId

 

            });                

 

        }

 

        return res.status(500).send({

 

            message: "Error updating CPLogBook with id " + req.params.cplogbookdraftId

 

        });

 

    });

 

};

 




// Delete a CPLogBook with the specified CPLogBookId in the request

 

exports.delete = (req, res) => {

 

    CPLogBookDraft.findOneAndDelete(req.params.primeNumber)

 

    .then(cplogbookdraft => {

 

        if(!cplogbookdraft) {

 

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

 

 