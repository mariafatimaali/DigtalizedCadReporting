const StockInspectionTickler = require('../models/stockInspectionTickler.model.js');

const StockInspectionTicklerReplica = require('../models/AuditTrail/stockInspectionTicklerReplica.model.js');



// Create and Save a new StockInspectionTickler

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }



    console.log("Replication Data");

    // Create a StockInspectionTickler

    const stockInspectionTickler = new StockInspectionTickler({



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
        all1QTRConductedByOutsource: req.body.all1QTRConductedBy, 
        all1QTRConductedDate : req.body.all1QTRConductedDate,

        all2QTRConductedBy:  req.body.all2QTRConductedBy,
        all2QTRConductedByOutsource:  req.body.all2QTRConductedBy,

        all2QTRConductedDate : req.body.all2QTRConductedDate,

        all3QTRConductedBy:  req.body.all3QTRConductedBy,
        all3QTRConductedByOutsource:  req.body.all3QTRConductedBy,
        all3QTRConductedDate : req.body.all3QTRConductedDate,

        all4QTRConductedBy:  req.body.all4QTRConductedBy,
        all4QTRConductedByOutsource:  req.body.all4QTRConductedBy,
        all4QTRConductedDate :req.body.all4QTRConductedDate,
        year :req.body.year,

        dataStatus: 1,

        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,

    });



    // Save StockInspectionTickler in the database

    stockInspectionTickler.save()

        .then(data => {

  //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\

    replicateData(req,res);

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the StockInspectionTickler." + err



            });

        });

};





// Retrieve and return all StockInspectionTickler from the database.

exports.findAll = (req, res) => {

    StockInspectionTickler.find({ dataStatus: 1 })

        .then(stockInspectionTickler => {

            res.send(stockInspectionTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving StockInspectionTickler."

            });

        });

};



// Find a single StockInspectionTickler with a StockInspectionTicklerId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    StockInspectionTickler.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(stockInspectionTickler => {

            if (!stockInspectionTickler) {

                return res.status(404).send({

                    message: "StockInspectionTickler not found with id " + req.params.primeNumber

                });

            }

            res.send(stockInspectionTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "StockInspectionTickler not found with id " + req.params.stockInspectionTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving StockInspectionTickler with id " + req.params.stockInspectionTicklerId

            });

        });

};



// Update a StockInspectionTickler identified by the StockInspectionTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "StockInspectionTickler content can not be empty"

        });

    }

    console.log('Request Parameters in update StockInspectionTickler request', req);

    // Find StockInspectionTickler and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    StockInspectionTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(stockInspectionTickler => {

            if (!stockInspectionTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.stockInspectionTicklerId

                });

            }

            res.send(stockInspectionTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "StockInspectionTickler not found with id " + req.params.stockInspectionTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating StockInspectionTickler with id " + req.params.stockInspectionTicklerId

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

            message: "StockInspectionTickler content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     StockInspectionTickler.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(stockInspectionTickler => {

         if(!stockInspectionTickler) {

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

    const stockInspectionTicklerReplica = new StockInspectionTicklerReplica(

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

        all1QTRConductedBy: req.body.all1QTRConductedBy, 

        all1QTRConductedDate : req.body.all1QTRConductedDate,

        all2QTRConductedBy:  req.body.all2QTRConductedBy,

        all2QTRConductedDate : req.body.all2QTRConductedDate,

        all3QTRConductedBy:  req.body.all3QTRConductedBy,

        all3QTRConductedDate : req.body.all3QTRConductedDate,

        all4QTRConductedBy:  req.body.all4QTRConductedBy,

        all4QTRConductedDate :req.body.all4QTRConductedDate,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save StockInspectionTickler in the database

    stockInspectionTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }



 function insert(req,res)

 {

    const stockInspectionTicklerReplica = new StockInspectionTicklerReplica({



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

    console.log('Before ka data =', stockInspectionTicklerReplica  )

    // Save StockInspectionTickler in the database

    stockInspectionTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('Data : ', data);

            console.log('End');

        }).catch(err => {

            

        });





 }
