const VendorManagment = require('../models/vendorManagment.model.js');

const VendorManagmentReplica = require('../models/AuditTrail/vendorManagmentReplica.model.js');



// Create and Save a new VendorManagment

exports.create = (req, res) => {

    // Validate request

    if (!req.body.vendorCategory) {

        return res.status(400).send({

            message: "Customer Demographic content can not be empty"

        });

    }



   

    // Create a VendorManagment

    const vendorManagment = new VendorManagment({

        vendorCategory :req.body.vendorCategory ,

        vendorName : req.body.vendorName  ,

        vendorShortName : req.body.vendorShortName  ,

        principalexecutive : req.body.principalexecutive  ,

        officeAddress : req.body.officeAddress  ,

        officeTelephone1 : req.body.officeTelephone1  ,

        officeTelephone2 : req.body.officeTelephone2  ,

        officeMobile1 : req.body.officeMobile1  ,

        officeMobile2 : req.body.officeMobile2  ,

        officeemail : req.body.officeemail  ,

        vendorStatus : req.body.vendorStatus  ,

        enlistedonpreferredpanel : req.body.enlistedonpreferredpanel  ,

        dateofenlistement : req.body.dateofenlistement  ,

        dateofReenlistement : req.body.dateofReenlistement  ,

        dateofsuspension : req.body.dateofsuspension  ,

        dateofdelistment : req.body.dateofdelistment  ,

        categoryofHBL : req.body.categoryofHBL  ,

        valutionLimit : req.body.valutionLimit  ,

        enlistedCity : req.body.enlistedCity  ,

        Remarks : req.body.Remarks  ,

        dataStatus : 1,

        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,
    });



    // Save VendorManagment in the database

    vendorManagment.save()

        .then(data => {

            console.log("Replication Data")

            replicateData(req,res);

            res.send(data);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while creating the VendorManagment." + err



            });

        });





};





// Retrieve and return all VendorManagment from the database.

exports.findAll = (req, res) => {

    VendorManagment.find({ dataStatus: 1 })

        .then(vendorManagment => {

            res.send(vendorManagment);

        }).catch(err => {

            res.status(500).send({

                message: err.message || "Some error occurred while retrieving VendorManagment."

            });

        });

};



// Find a single VendorManagment with a VendorManagmentId

exports.findOne = (req, res) => {

    var id = req.params.vendorCategory

    VendorManagment.find({ vendorCategory: req.body.vendorCategory, dataStatus: 1 })

        .then(vendorManagment => {

            if (!vendorManagment) {

                return res.status(404).send({

                    message: "VendorManagment not found with id " + req.params.vendorCategory

                });

            }

            res.send(vendorManagment);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "VendorManagment not found with id " + req.params.vendorManagmentId

                });

            }

            return res.status(500).send({

                message: "Error retrieving VendorManagment with id " + req.params.vendorManagmentId

            });

        });

};



// Update a VendorManagment identified by the VendorManagmentId in the request

exports.update = (req, res) => {

    // Validate Request

    if (!req.body.vendorCategory) {

        return res.status(400).send({

            message: "VendorManagment content can not be empty"

        });

    }

    console.log('Request Parameters in update VendorManagment request', req);

    // Find VendorManagment and update it with the request body



    //<----------------------------------------AUDIT TRAIL------------------------------------------------------------------->\\ 

    replicateData(req,res);





    VendorManagment.updateOne({ "vendorCategory": req.body.vendorCategory },

        { $set: req.body })

        .then(vendorManagment => {

            if (!vendorManagment) {

                return res.status(404).send({

                    message: "Customer Demographic not found with id " + req.params.vendorManagmentId

                });

            }

            res.send(vendorManagment);

        }).catch(err => {

            if (err.kind === 'ObjectId') {

                return res.status(404).send({

                    message: "VendorManagment not found with id " + req.params.vendorManagmentId

                });

            }

            return res.status(500).send({

                message: "Error updating VendorManagment with id " + req.params.vendorManagmentId

            });

        });

};



exports.delete = (req, res) => {



    //<-------------------------------------Audit Trail---------------------------------------------->\\

    req.body.dataStatus = "0";

    console.log(req.body);

    replicateData(req,res);



    if (!req.body.vendorCategory) {

        return res.status(400).send({

            message: "VendorManagment content can not be empty"

        });

    }



    console.log('before find one and delete query ',req.body.vendorCategory);

    

     VendorManagment.findOneAndDelete({vendorCategory: req.body.vendorCategory})

     .then(vendorManagment => {

         if(!vendorManagment) {

             return res.status(404).send({

                 message: "customer Demographic not found with id " + req.body.vendorCategory

             });

         }

         res.send({message: "CPLogBook deleted successfully!"});

     }).catch(err => {

         if(err.kind === 'ObjectId' || err.name === 'NotFound') {

             return res.status(404).send({

                 message: "CPLogBook not found with id " + req.params.vendorCategory

             });                

         }

         return res.status(500).send({

             message: "Could not delete CPLogBook with id " + req.body.vendorCategory

         });

     });

 };







function replicateData(req,res) {

console.log("into replicated Data");

    const vendorManagmentReplica = new VendorManagmentReplica(

        {

        vendorCategory :req.body.vendorCategory ,

        vendorName : req.body.vendorName  ,

        vendorShortName : req.body.vendorShortName  ,

        principalexecutive : req.body.principalexecutive  ,

        officeAddress : req.body.officeAddress  ,

        officeTelephone1 : req.body.officeTelephone1  ,

        officeTelephone2 : req.body.officeTelephone2  ,

        officeMobile1 : req.body.officeMobile1  ,

        officeMobile2 : req.body.officeMobile2  ,

        officeemail : req.body.officeemail  ,

        vendorStatus : req.body.vendorStatus  ,

        enlistedonpreferredpanel : req.body.enlistedonpreferredpanel  ,

        dateofenlistement : req.body.dateofenlistement  ,

        dateofReenlistement : req.body.dateofReenlistement  ,

        dateofsuspension : req.body.dateofsuspension  ,

        dateofdelistment : req.body.dateofdelistment  ,

        categoryofHBL : req.body.categoryofHBL  ,

        valutionLimit : req.body.valutionLimit  ,

        enlistedCity : req.body.enlistedCity  ,

        Remarks : req.body.Remarks  ,

        dataStatus: req.body.dataStatus,

        createdBy: req.body.createdBy,

        modifiedBy: req.body.modifiedBy

    });



    // Save VendorManagment in the database

    vendorManagmentReplica.save()

        .then(data => {

            res.send(data);

            console.log('data :  ' , data)

        }).catch(err => {

            

        });

    

 }







