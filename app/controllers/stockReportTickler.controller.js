const StockReportTickler = require('../models/stockReportTickler.model.js');


const StockReportTicklerReplica = require('../models/AuditTrail/stockReportTicklerReplica');


// Create and Save a new StockReportTickler

exports.create = (req, res) => {

    // Validate request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }



    console.log("Replication Data");

    

    // Create a StockReportTickler

    const stockReportTickler = new StockReportTickler({



        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        stockReportCycle:req.body.stockReportCycle,

        jan:req.body.jan,

        feb: req.body.feb,

        mar: req.body.mar,

        apr: req.body.apr,

        may: req.body.may,

        june:req.body.june,

        july:req.body.july,

        aug: req.body.aug,

        sep: req.body.sep,

        oct: req.body.oct,

        nov: req.body.nov,

        dec: req.body.dec,
        year :req.body.year,

        dataStatus: "1",
        yearly : req.body.yearly,
        st1quater :  req.body.st1quater,
        nd2qauter: req.body.nd2qauter,
        rd3quater: req.body.rd3quater,
        th4quater:req.body.th4quater,
        stsemianually :req.body.stsemianually,
        ndsemianually:req.body.ndsemianually,
        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
         remarks:req.body.remarks
    });



    // Save StockReportTickler in the database

    stockReportTickler.save()

        .then(data => {


//<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\

     replicateData(req,res);


            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the StockReportTickler." + err

            });

        });

};





// Retrieve and return all StockReportTickler from the database.

exports.findAll = (req, res) => {

    StockReportTickler.find({ dataStatus: 1 })

        .then(stockReportTickler => {

            res.send(stockReportTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving StockReportTickler."

            });

        });

};



// Find a single StockReportTickler with a StockReportTicklerId

exports.findOne = (req, res) => {
    var id = req.body.primeNumber
    StockReportTickler.find({ primeNumber: req.body.primeNumber })
        .then(stockReportTickler => {
            if (!stockReportTickler) {
                return res.status(404).send({
                    message: "StockReportTickler not found with id " + req.params.primeNumber
                });

            }

            res.send(stockReportTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "StockReportTickler not found with id " + req.params.stockReportTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving StockReportTickler with id " + req.params.stockReportTicklerId

            });

        });

};



// Update a StockReportTickler identified by the StockReportTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "StockReportTickler content can not be empty"

        });

    }

    console.log('update function', req.body);

    // Find StockReportTickler and update it with the request body

     //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    // replicateData(req, res);



    replicateData(req,res)





    StockReportTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(stockReportTickler => {

            if (!stockReportTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.stockReportTicklerId

                });

            }

            res.send(stockReportTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "StockReportTickler not found with id " + req.params.stockReportTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating StockReportTickler with id " + req.params.stockReportTicklerId

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

            message: "StockReportTickler content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     StockReportTickler.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(stockReportTickler => {

         if(!stockReportTickler) {

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

 

function replicateData(req,res){



    const stockReportTicklerReplica = new StockReportTicklerReplica({



        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        stockReportCycle:req.body.stockReportCycle,

        jan:req.body.jan,

        feb: req.body.feb,

        mar: req.body.mar,

        apr: req.body.apr,

        may: req.body.may,

        june:req.body.june,

        july:req.body.july,

        aug: req.body.aug,

        sep: req.body.sep,

        oct: req.body.oct,

        nov: req.body.nov,

        dec: req.body.dec,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save StockReportTickler in the database

    stockReportTicklerReplica.save()

    .then(data => {

        console.log('inside save',data);

    }).catch(err => {        

    });

}