const InsuranceTickler = require('../models/insuranceTickler.model.js');

const InsuranceTicklerReplica = require('../models/AuditTrail/insuranceTicklerReplica.model.js');

var dateFormat = require('dateformat');


// Create and Save a new InsuranceTickler

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }




    console.log("Replication Data");


    // Create a InsuranceTickler

    const insuranceTickler = new InsuranceTickler({
        primeNumber: req.body.primeNumber,
        businessSegment: req.body.businessSegment,
        region: req.body.region,
        branchCode: req.body.branchCode,
        branchName: req.body.branchName,
        nameOfBorrower: req.body.nameOfBorrower,
        nameofInsuranceCo: req.body.nameofInsuranceCo,
        policyNo: req.body.policyNo,
        totalSumInsured: req.body.totalSumInsured,
        hBLShare: req.body.hBLShare,
        nameofCoInsurance: req.body.nameofCoInsurance,
        hBLCoInsuranceAmount: req.body.hBLCoInsuranceAmount,
        stocksHypo: req.body.stocksHypo,
        stocksPledge: req.body.stocksPledge,
        building: req.body.building,
        machinery: req.body.machinery,
        other: req.body.other,
        expiryDate: req.body.expiryDate,
        pPRStaus: req.body.pPRStaus,
        pPRUptillDate: req.body.pPRUptillDate,
        nextPremiumDueDate: req.body.nextPremiumDueDate,
        dataStatus: "1",
        createdBy: req.body.createdBy,
        modifiedBy: req.body.modifiedBy,
    });





    // Save InsuranceTickler in the database

    insuranceTickler.save().then(data => {

        //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\

        replicateData(req, res);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the InsuranceTickler." + err




        });

    });







};







// Retrieve and return all InsuranceTickler from the database.

exports.findAll = (req, res) => {

    InsuranceTickler.find({ dataStatus: 1 })

        .then(insuranceTickler => {

            res.send(insuranceTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving InsuranceTickler."

            });

        });

};




// Find a single InsuranceTickler with a InsuranceTicklerId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    InsuranceTickler.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(insuranceTickler => {

            if (!insuranceTickler) {

                return res.status(404).send({

                    message: "InsuranceTickler not found with id " + req.params.primeNumber

                });

            }

            res.send(insuranceTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "InsuranceTickler not found with id " + req.params.insuranceTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving InsuranceTickler with id " + req.params.insuranceTicklerId

            });

        });

};




// Update a InsuranceTickler identified by the InsuranceTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "InsuranceTickler content can not be empty"

        });

    }

    console.log('Request Parameters in update InsuranceTickler request', req);

    // Find InsuranceTickler and update it with the request body




    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req, res);







    InsuranceTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(insuranceTickler => {

            if (!insuranceTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.insuranceTicklerId

                });

            }

            res.send(insuranceTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "InsuranceTickler not found with id " + req.params.insuranceTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating InsuranceTickler with id " + req.params.insuranceTicklerId

            });

        });

};




exports.delete = (req, res) => {




    //<-------------------------------------Audit Trail---------------------------------------------->\\

    req.body.dataStatus = "0";

    console.log(req.body);

    replicateData(req, res);




    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "InsuranceTickler content can not be empty"

        });

    }




    console.log('before find one and delete query ', req.body.primeNumber);



    InsuranceTickler.findOneAndDelete({ primeNumber: req.body.primeNumber })

        .then(insuranceTickler => {

            if (!insuranceTickler) {

                return res.status(404).send({

                    message: "customer Demographic not found with id " + req.body.primeNumber

                });

            }

            res.send({ message: "CPLogBook deleted successfully!" });

        }).catch(err => {

            if (err.kind === 'ObjectId' || err.name === 'NotFound') {

                return res.status(404).send({

                    message: "CPLogBook not found with id " + req.params.primeNumber

                });

            }

            return res.status(500).send({

                message: "Could not delete CPLogBook with id " + req.body.primeNumber

            });

        });

};










function replicateData(req, res) {

    console.log("into replicated Data");

    const insuranceTicklerReplica = new InsuranceTicklerReplica(

        {

            primeNumber: req.body.primeNumber,

            businessSegment: req.body.businessSegment,

            region: req.body.region,

            branchCode: req.body.branchCode,

            branchName: req.body.branchName,

            nameOfBorrower: req.body.nameOfBorrower,

            nameofInsuranceCo: req.body.nameofInsuranceCo,

            policyNo: req.body.policyNo,

            totalSumInsured: req.body.totalSumInsured,

            hBLShare: req.body.hBLShare,

            nameofCoInsurance: req.body.nameofCoInsurance,

            hBLCoInsuranceAmount: req.body.hBLCoInsuranceAmount,

            stocksHypo: req.body.stocksHypo,

            stocksPledge: req.body.stocksPledge,

            building: req.body.building,

            machinery: req.body.machinery,

            other: req.body.other,

            expiryDate: req.body.expiryDate,

            pPRStaus: req.body.pPRStaus,

            pPRUptillDate: req.body.pPRUptillDate,

            nextPremiumDueDate: req.body.nextPremiumDueDate,

            dataStatus: req.body.dataStatus,

            createdBy: req.body.createdBy,

            modifiedBy: req.body.modifiedBy

        });




    insuranceTicklerReplica.save()

        .then(data => {

        }).catch(err => {

        });



}
