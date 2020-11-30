const PledgeJointstockInspectionTickler = require('../models/pledgejointstockInspectionTickler.model.js');
const PledgeJointstockInspectionTicklerReplica = require('../models/AuditTrail/pledgejointstockInspectionTicklerReplica.model.js');



// Create and Save a new PledgeJointstockInspectionTickler

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

    // Create a PledgeJointstockInspectionTickler

    const pledgejointstockInspectionTickler = new PledgeJointstockInspectionTickler({



        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        frequency:req.body.frequency,



        marchConductedBy: req.body.marchConductedBy, 

        marchConductedDate : req.body.marchConductedDate,

        juneConductedBy:  req.body.juneConductedBy,

        juneConductedDate : req.body.juneConductedDate,

        sepConductedBy:  req.body.sepConductedBy,

        sepConductedDate : req.body.sepConductedDate,

        decConductedBy:  req.body.decConductedBy,

        decConductedDate :req.body.decConductedDate,

        dataStatus: 1,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save PledgeJointstockInspectionTickler in the database

    pledgejointstockInspectionTickler.save()

        .then(data => {

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the PledgeJointstockInspectionTickler." + err



            });

        });





};





// Retrieve and return all PledgeJointstockInspectionTickler from the database.

exports.findAll = (req, res) => {

    PledgeJointstockInspectionTickler.find({ dataStatus: 1 })

        .then(pledgejointstockInspectionTickler => {

            res.send(pledgejointstockInspectionTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving PledgeJointstockInspectionTickler."

            });

        });

};



// Find a single PledgeJointstockInspectionTickler with a PledgeJointstockInspectionTicklerId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    PledgeJointstockInspectionTickler.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(pledgejointstockInspectionTickler => {

            if (!pledgejointstockInspectionTickler) {

                return res.status(404).send({

                    message: "PledgeJointstockInspectionTickler not found with id " + req.params.primeNumber

                });

            }

            res.send(pledgejointstockInspectionTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "PledgeJointstockInspectionTickler not found with id " + req.params.pledgejointstockInspectionTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving PledgeJointstockInspectionTickler with id " + req.params.pledgejointstockInspectionTicklerId

            });

        });

};



// Update a PledgeJointstockInspectionTickler identified by the PledgeJointstockInspectionTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "PledgeJointstockInspectionTickler content can not be empty"

        });

    }

    console.log('Request Parameters in update PledgeJointstockInspectionTickler request', req);

    // Find PledgeJointstockInspectionTickler and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    PledgeJointstockInspectionTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(pledgejointstockInspectionTickler => {

            if (!pledgejointstockInspectionTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.pledgejointstockInspectionTicklerId

                });

            }

            res.send(pledgejointstockInspectionTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "PledgeJointstockInspectionTickler not found with id " + req.params.pledgejointstockInspectionTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating PledgeJointstockInspectionTickler with id " + req.params.pledgejointstockInspectionTicklerId

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

            message: "PledgeJointstockInspectionTickler content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     PledgeJointstockInspectionTickler.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(pledgejointstockInspectionTickler => {

         if(!pledgejointstockInspectionTickler) {

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

    const pledgejointstockInspectionTicklerReplica = new PledgeJointstockInspectionTicklerReplica(

        {

         primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        frequency:req.body.frequency,

        marchConductedBy: req.body.marchConductedBy, 

        marchConductedDate : req.body.marchConductedDate,

        juneConductedBy:  req.body.juneConductedBy,

        juneConductedDate : req.body.juneConductedDate,

        sepConductedBy:  req.body.sepConductedBy,

        sepConductedDate : req.body.sepConductedDate,

        decConductedBy:  req.body.decConductedBy,

        decConductedDate :req.body.decConductedDate,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save PledgeJointstockInspectionTickler in the database

    pledgejointstockInspectionTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }



 function insert(req,res)

 {

    const pledgejointstockInspectionTicklerReplica = new PledgeJointstockInspectionTicklerReplica({



        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        frequency:req.body.frequency,

        all1QTRConductedBy: req.body.all1QTRConductedBy, 

        all1QTRConductedDate : req.body.all1QTRConductedDate,

        all2QTRConductedBy:  req.body.all2QTRConductedBy,

        all2QTRConductedDate : req.body.all2QTRConductedDate,

        all3QTRConductedBy:  req.body.all3QTRConductedBy,

        all3QTRConductedDate : req.body.all3QTRConductedDate,

        all4QTRConductedBy:  req.body.all4QTRConductedBy,

        all4QTRConductedDate :req.body.all4QTRConductedDate,

        dataStatus: 1,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });

    console.log('Before ka data =', pledgejointstockInspectionTicklerReplica  )

    // Save PledgeJointstockInspectionTickler in the database

    pledgejointstockInspectionTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('Data : ', data);

            console.log('End');

        }).catch(err => {

            

        });





 }