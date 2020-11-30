const PledgeStockInspectionTickler = require('../models/pleadgeStockInspectionTickler.model.js');

const PledgeStockInspectionTicklerReplica = require('../models/AuditTrail/stockInspectionTicklerReplica.model.js');



// Create and Save a new PledgeStockInspectionTickler

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

    // Create a PledgeStockInspectionTickler

    const pledgestockInspectionTickler = new PledgeStockInspectionTickler({



        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        frequency:req.body.frequency,
        jointInspection:req.body.jointInspection,
        
    janConductedBy: req.body.janConductedBy,
    janConductedByOutsource: req.body.janConductedByOutsource,
    janDate: req.body.janDate,

    febConductedBy: req.body.febConductedBy,
    febConductedByOutsource: req.body.febConductedByOutsource,

    febDate: req.body.febDate,

    marchConductedBy: req.body.marchConductedBy,
    marchConductedByOutsource: req.body.marchConductedByOutsource,

    marchDate: req.body.marchDate,

    aprilConductedBy: req.body.aprilConductedBy,
    aprilConductedByOutsource: req.body.aprilConductedByOutsource,

    aprilDate: req.body.aprilDate,

    mayConductedBy: req.body.mayConductedBy,
    mayConductedByOutsource: req.body.mayConductedByOutsource,
    

    mayDate: req.body.mayDate,

    juneConductedBy: req.body.juneConductedBy,
    juneConductedByOutsource: req.body.juneConductedByOutsource,

    juneDate: req.body.juneDate,

    julyConductedBy: req.body.julyConductedBy,
    julyConductedByOutsource: req.body.julyConductedByOutsource,
    julyDate: req.body.julyDate,

    augustConductedBy: req.body.augustConductedBy,
    augustConductedByOutsource: req.body.augustConductedByOutsource,

    augustDate: req.body.augustDate,

    septemberConductedBy: req.body.septemberConductedBy,
    septemberConductedByOutsource: req.body.septemberConductedByOutsource,
    septemberDate: req.body.septemberDate,

    octoberConductedBy: req.body.octoberConductedBy,
    octoberConductedByOutsource: req.body.octoberConductedByOutsource,
    octoberDate: req.body.octoberDate,

    novemberConductedBy: req.body.novemberConductedBy,
    novemberConductedByOutsource: req.body.novemberConductedByOutsource,
    novemberDate: req.body.novemberDate,

    decemberConductedBy: req.body.decemberConductedBy,
    decemberConductedByOutsource: req.body.decemberConductedByOutsource,
    decemberDate: req.body.decemberDate,

    dataStatus: "1",

    createdBy : req.body.createdBy,

    modifiedBy : req.body.modifiedBy,

    year  : req.body.year,


    yearly : req.body.yearly,
    yearlyDate  : req.body.yearlyDate,
    yearlyOutsource : req.body.yearlyOutsource,
    st1quater :  req.body.st1quater,
    st1quaterOutsource :  req.body.st1quaterOutsource,
    st1quaterDate :  req.body.st1quaterDate,
    nd2qauter:  req.body.nd2qauter,
    nd2qauterOutsource:  req.body.nd2qauterOutsource,
    nd2qauterDate:  req.body.nd2qauterDate,
    rd3quater:  req.body.rd3quater,
    rd3quaterOutsource:  req.body.rd3quaterOutsource,
    rd3quaterDate:  req.body.rd3quaterDate,
    th4quater:req.body.th4quater,
    th4quaterOutsource:req.body.th4quaterOutsource,
    th4quaterDate:req.body.th4quaterDate,
    stsemianually :req.body.stsemianually,
    stsemianuallyOutsource :req.body.stsemianuallyOutsource,
    stsemianuallyDate :req.body.stsemianuallyDate,
    ndsemianually:req.body.ndsemianually,
    ndsemianuallyOutsource:req.body.ndsemianuallyOutsource,
    ndsemianuallyDate:req.body.ndsemianuallyDate,
    createdBy :req.body.createdBy,

    createdOn:req.body.createdOn,
     modifiedBy: req.body.modifiedBy,
     modifiedOn : req.body.modifiedOn,
     deletedBy:req.body.deletedBy,
     deletedOn:req.body.deletedOn,
    });



    // Save PledgeStockInspectionTickler in the database

    pledgestockInspectionTickler.save()

        .then(data => {

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the PledgeStockInspectionTickler." + err



            });

        });





};





// Retrieve and return all PledgeStockInspectionTickler from the database.

exports.findAll = (req, res) => {

    PledgeStockInspectionTickler.find({ dataStatus: 1 })

        .then(pledgestockInspectionTickler => {

            res.send(pledgestockInspectionTickler);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving PledgeStockInspectionTickler."

            });

        });

};



// Find a single PledgeStockInspectionTickler with a PledgeStockInspectionTicklerId

exports.findOne = (req, res) => {

    var id = req.params.primeNumber

    PledgeStockInspectionTickler.find({ primeNumber: req.body.primeNumber, dataStatus: 1 })

        .then(pledgestockInspectionTickler => {

            if (!pledgestockInspectionTickler) {

                return res.status(404).send({

                    message: "PledgeStockInspectionTickler not found with id " + req.params.primeNumber

                });

            }

            res.send(pledgestockInspectionTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "PledgeStockInspectionTickler not found with id " + req.params.pledgestockInspectionTicklerId

                });

            }

            return res.status(500).send({

                message: "Error retrieving PledgeStockInspectionTickler with id " + req.params.pledgestockInspectionTicklerId

            });

        });

};



// Update a PledgeStockInspectionTickler identified by the PledgeStockInspectionTicklerId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.primeNumber) {

        return res.status(400).send({

            message: "PledgeStockInspectionTickler content can not be empty"

        });

    }

    console.log('Request Parameters in update PledgeStockInspectionTickler request', req);

    // Find PledgeStockInspectionTickler and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    PledgeStockInspectionTickler.updateOne({ "primeNumber": req.body.primeNumber },

        { $set: req.body })

        .then(pledgestockInspectionTickler => {

            if (!pledgestockInspectionTickler) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.pledgestockInspectionTicklerId

                });

            }

            res.send(pledgestockInspectionTickler);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "PledgeStockInspectionTickler not found with id " + req.params.pledgestockInspectionTicklerId

                });

            }

            return res.status(500).send({

                message: "Error updating PledgeStockInspectionTickler with id " + req.params.pledgestockInspectionTicklerId

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

            message: "PledgeStockInspectionTickler content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.primeNumber);

    

     PledgeStockInspectionTickler.findOneAndDelete({primeNumber: req.body.primeNumber})

     .then(pledgestockInspectionTickler => {

         if(!pledgestockInspectionTickler) {

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

    const pledgestockInspectionTicklerReplica = new PledgeStockInspectionTicklerReplica(

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
            jointInspection:req.body.jointInspection,
            janConductedBy:req.body.janConductedBy,

            janDate:req.body.janDate,

            febConductedBy:req.body.febConductedBy,

            febDate:req.body.febDate,

            marchConductedBy:req.body.marchConductedBy,

            marchDate:req.body.marchDate,

            aprilConductedBy:req.body.aprilConductedBy,

            aprilDate:req.body.aprilDate,

            mayConductedBy:req.body.mayConductedBy,

            mayDate:req.body.mayDate,

            juneConductedBy :req.body.juneConductedBy,

            juneDate:req.body.juneDate,

            julyConductedBy:req.body.julyConductedBy,

            julyDate:req.body.frequency,

            augustConductedBy:req.body.augustConductedBy,

            augustDate:req.body.augustDate,

            septemberConductedBy:req.body.septemberConductedBy,

            septemberDate:req.body.septemberDate,

            octoberConductedBy:req.body.octoberConductedBy,

            octoberDate:req.body.octoberDate,

            novemberConductedBy:req.body.novemberConductedBy,

            novemberDate:req.body.novemberDate,

            decemberConductedBy:req.body.decemberConductedBy,

            decemberDate:req.body.decemberDate,

            dataStatus: req.body.dataStatus,

            createdBy: req.body.createdBy,

            modifiedBy: req.body.modifiedBy

    });



    // Save PledgeStockInspectionTickler in the database

    pledgestockInspectionTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }



 function insert(req,res)

 {

    const pledgestockInspectionTicklerReplica = new PledgeStockInspectionTicklerReplica({
        primeNumber: req.body.primeNumber,

        businessSegment: req.body.businessSegment,

        region: req.body.region,

        branchCode: req.body.branchCode,

        branchName: req.body.branchName,

        nameOfBorrower: req.body.nameOfBorrower,

        rMCreditHub:req.body.rMCreditHub,

        limit:req.body.limit,

        frequency:req.body.frequency,
        jointInspection:req.body.jointInspection,
        janConductedBy:req.body.janConductedBy,

        janDate:req.body.janDate,

        febConductedBy:req.body.febConductedBy,

        febDate:req.body.febDate,

        marchConductedBy:req.body.marchConductedBy,

        marchDate:req.body.marchDate,

        aprilConductedBy:req.body.aprilConductedBy,

        aprilDate:req.body.aprilDate,

        mayConductedBy:req.body.mayConductedBy,

        mayDate:req.body.mayDate,

        juneConductedBy :req.body.juneConductedBy,

        juneDate:req.body.juneDate,

        julyConductedBy:req.body.julyConductedBy,

        julyDate:req.body.frequency,

        augustConductedBy:req.body.augustConductedBy,

        augustDate:req.body.augustDate,

        septemberConductedBy:req.body.septemberConductedBy,

        septemberDate:req.body.septemberDate,

        octoberConductedBy:req.body.octoberConductedBy,

        octoberDate:req.body.octoberDate,

        novemberConductedBy:req.body.novemberConductedBy,

        novemberDate:req.body.novemberDate,

        decemberConductedBy:req.body.decemberConductedBy,

        decemberDate:req.body.decemberDate,

        dataStatus: 1,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });

    console.log('Before ka data =', pledgestockInspectionTicklerReplica  )

    // Save PledgeStockInspectionTickler in the database

    pledgestockInspectionTicklerReplica.save()

        .then(data => {

            res.send(data);

            console.log('Data : ', data);

            console.log('End');

        }).catch(err => {

            

        });





 }
