const ValuationExpiryTickler = require('../models/valuationExpiryTickler.model.js');

const ValuationExpiryTicklerReplica = require('../models/AuditTrail/valuationExpiryTicklerReplica.model.js');



// Create and Save a new ValuationExpiryTickler

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

    // Create a ValuationExpiryTickler

    const valuationExpiryTickler = new ValuationExpiryTickler({

        primeNumber : req.body.primeNumber,

        businessSegment : req.body.businessSegment,

        region : req.body.region,

        branchCode : req.body.branchCode,

        branchName : req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        collateralReference : req.body.collateralReference,

        valuationReference : req.body.valuationReference,

        descriptionOfProperty :req.body.descriptionOfProperty,

        dateofLatestValuation : req.body.dateofLatestValuation,

        valuationConductedBy : req.body.valuationConductedBy,

        mVland : req.body.mVland,

        mVbuilding : req.body.mVbuilding,

        mVplantMachinery : req.body.mVplantMachinery,

        mVother : req.body.mVother,

        mVtotal : req.body.mVtotal,

        land : req.body.land,

        fSValuebuilding : req.body.fSValuebuilding,

        fSplantMachinery : req.body.fSplantMachinery,

        fSother : req.body.fSother,

        fStotal : req.body.fStotal,

        duedateofNextValuation : req.body.duedateofNextValuation,

        accountStatus : req.body.accountStatus,

        dataStatus : 1,

        createdBy : req.body.createdBy,

        modifiedBy : req.body.modifiedBy

    });



    // Save ValuationExpiryTickler in the database

    valuationExpiryTickler.save()

        .then(data => {

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the ValuationExpiryTickler." + err



            });

        });





};





// Retrieve and return all ValuationExpiryTickler from the database.

exports.findAll = (req, res) => {

    ValuationExpiryTickler.find({ dataStatus: 1 })

        .then(valuationExpiryTickler => {

            res.send(valuationExpiryTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving ValuationExpiryTickler."

            });

        });

};



// Find a single ValuationExpiryTickler with a ValuationExpiryTicklerId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    ValuationExpiryTickler.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(valuationExpiryTickler => {

            if (!valuationExpiryTickler) {

                return res.status(404).send({

                    message: "ValuationExpiryTickler not found with id " + req.params.primeNumber

                });

            }

            res.send(valuationExpiryTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "ValuationExpiryTickler not found with id " + req.params.valuationExpiryTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving ValuationExpiryTickler with id " + req.params.valuationExpiryTicklerId

            });

        });

};



// Update a ValuationExpiryTickler identified by the ValuationExpiryTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "ValuationExpiryTickler content can not be empty"

        });

    }

    console.log('Request Parameters in update ValuationExpiryTickler request', req);

    // Find ValuationExpiryTickler and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    ValuationExpiryTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(valuationExpiryTickler => {

            if (!valuationExpiryTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.valuationExpiryTicklerId

                });

            }

            res.send(valuationExpiryTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "ValuationExpiryTickler not found with id " + req.params.valuationExpiryTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating ValuationExpiryTickler with id " + req.params.valuationExpiryTicklerId

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

            message: "ValuationExpiryTickler content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     ValuationExpiryTickler.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(valuationExpiryTickler => {

         if(!valuationExpiryTickler) {

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

    const valuationExpiryTicklerReplica = new ValuationExpiryTicklerReplica(

        {

            primeNumber: req.body.primeNumber,

            businessSegment: req.body.businessSegment,

            region: req.body.region,

            branchCode: req.body.branchCode,

            branchName: req.body.branchName,

            nameOfBorrower: req.body.nameOfBorrower,

            collateralReference : req.body.collateralReference,

            valuationReference : req.body.valuationReference,

            descriptionOfProperty : req.body.descriptionOfProperty,

            dateofLatestValuation: req.body.dateofLatestValuation,

            valuationConductedBy : req.body.valuationConductedBy,

            mVland: req.body.mVland,

            mVbuilding: req.body.mVbuilding,

            mVplantMachinery: req.body.mVplantMachinery,

            mVother: req.body.mVother,

            mVtotal: req.body.mVtotal,

            land: req.body.land,

            fSValuebuilding: req.body.fSValuebuilding,

            fSplantMachinery: req.body.fSplantMachinery,

            fSother: req.body.fSother,

            fStotal: req.body.fStotal,

            duedateofNextValuation: req.body.duedateofNextValuation,

            accountStatus: req.body.accountStatus,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save ValuationExpiryTickler in the database

    valuationExpiryTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }



 function insert(req,res)

 {

    const valuationExpiryTicklerReplica = new ValuationExpiryTicklerReplica({



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

    console.log('Before ka data =', valuationExpiryTicklerReplica  )

    // Save ValuationExpiryTickler in the database

    valuationExpiryTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('Data : ', data);

            console.log('End');

        }).catch(err => {

            

        });





 }


