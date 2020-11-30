const SafeInOutRegister = require('../models/safeInOutRegister.model.js');

const SafeInOutRegisterReplica = require('../models/AuditTrail/safeInOutRegisterReplica.model');




// Create and Save a new CustomerDemographic

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "Safe In Out Refister content can not be empty"

        });

    }

    // Create a CustomerDemographic

    const safeInOutRegister = new SafeInOutRegister({




        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        collateralReference: req.body.collateralReference,

        collateralTypeDescription: req.body.collateralTypeDescription,

        detailofCollateral: req.body.detailofCollateral,

        safeinDate: req.body.safeinDate,

        temporarySafeoutDate: req.body.temporarySafeoutDate,

        permanentSafeoutDate: req.body.permanentSafeoutDate,

        acknowledgementReceiptOfBorrower: req.body.acknowledgementReceiptOfBorrower,

        remarks: req.body.remarks,

        listofDocuments: req.body.listofDocuments,

        dataStatus: "1",

        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
         collateralType:req.body.collateralType,

    });




    // Save CustomerDemographic in the database

    safeInOutRegister.save()

        .then(data => {

            //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

            replicateData(req,res);

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the CustomerDemographic." + err




            });

        });










};







// Retrieve and return all CustomerDemographic from the database.

exports.findAll = (req, res) => {

    SafeInOutRegister.find({ dataStatus: 1 })

        .then(safeInOutRegister => {

            res.send(safeInOutRegister);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving CustomerDemographic."

            });

        });

};




// Find a single CustomerDemographic with a CustomerDemographicId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    SafeInOutRegister.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(safeInOutRegister => {

            if (!safeInOutRegister) {

                return res.status(404).send({

                    message: "CustomerDemographic not found with id " + req.params.primeNumber

                });

            }

            res.send(safeInOutRegister);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "safeInOutRegister not found with id " + req.params.safeInOutRegisterId

                });

            }

            return res.status(500).send({

                message: "Error retrieving safeInOutRegister with id " + req.params.safeInOutRegisterId

            });

        });

};




// Update a CustomerDemographic identified by the CustomerDemographicId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "safeInOutRegister content can not be empty"

        });

    }

    console.log('Request Parameters in update safeInOutRegister request', req);

    // Find CustomerDemographic and update it with the request body




    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req, res);







    SafeInOutRegister.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(safeInOutRegister => {

            if (!safeInOutRegister) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.safeInOutRegisterId

                });

            }

            res.send(safeInOutRegister);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "CustomerDemographic not found with id " + req.params.customerDemographicId

                });

            }

            return res.status(500).send({

                message: "Error updating CustomerDemographic with id " + req.params.customerDemographicId

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

            message: "safeInOutRegister content can not be empty"

        });

    }




    console.log('before find one and delete query ',req.body.primeNumber);

    

    SafeInOutRegister.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(safeInOutRegister => {

         if(!safeInOutRegister) {

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

    const safeInOutRegisterReplica = new SafeInOutRegisterReplica(

        {

        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        collateralReference: req.body.nameOfBorrower,

        collateralTypeDescription: req.body.nameOfBorrower,

        detailofCollateral: req.body.nameOfBorrower,

        safeinDate: req.body.safeinDate,

        temporarySafeoutDate: req.body.temporarySafeoutDate,

        permanentSafeoutDate: req.body.permanentSafeoutDate,

        acknowledgementReceiptOfBorrower: req.body.acknowledgementReceiptOfBorrower,

        remarks: req.body.remarks,

        listofDocuments: req.body.listofDocuments,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

        });

        console.log("after replicated initialize Data", req.body);

        console.log("replicated Data", safeInOutRegisterReplica);

     safeInOutRegisterReplica.save()

    .then(data => { 

        console.log("Data = ", data);

    })

    .catch(err => {        

    });

    

 }




 function insert(req,res){

    const safeInOutRegisterReplica = new SafeInOutRegisterReplica({




        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        collateralReference: req.body.nameOfBorrower,

        collateralTypeDescription: req.body.nameOfBorrower,

        detailofCollateral: req.body.nameOfBorrower,

        safeinDate: req.body.safeinDate,

        temporarySafeoutDate: req.body.temporarySafeoutDate,

        permanentSafeoutDate: req.body.permanentSafeoutDate,

        acknowledgementReceiptOfBorrower: req.body.acknowledgementReceiptOfBorrower,

        remarks: req.body.remarks,

        listofDocuments: req.body.listofDocuments,

        dataStatus: "1",

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });




    // Save CustomerDemographic in the database

    safeInOutRegisterReplica.save()

        .then(data => {

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the CustomerDemographic." + err




            });

        });







 }
