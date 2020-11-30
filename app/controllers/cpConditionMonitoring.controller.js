const CpConditionMonitoring = require('../models/cpConditionMonitoring.model.js');
const CpConditionMonitoringReplica =  require('../models/AuditTrail/cpConditionMonitoringReplica.model.js');
var assert = require('assert'); 

// Create and Save a new cpConditionMonitoring
 exports.create = (req, res) => {
    console.log("Create")
    // Validate request
    if(!req.body.primeNumber) {
        return res.status(400).send({
            message: "CP Condition Monitoring content can not be empty"
        });
    }
 
    // Create a CP Monitoring
    let cpConditionMonitoring = new CpConditionMonitoring({
        primeNumber:req.body.primeNumber, 
        businessSegment: req.body.businessSegment , 
        region: req.body.region , 
        branchCode: req.body.branchCode, 
        branchName: req.body.branchName , 
        nameOfBorrower:req.body.nameOfBorrower, 
        cpApprovalNo :req.body.cpApprovalNo, 
        cpApprovalDate:req.body.cpApprovalDate , 
        dateOfDisbursement:req.body.dateOfDisbursement, 
        typeOfFacility :req.body.typeOfFacility ,
        accountNo:req.body.accountNo , 
        conditions:req.body.conditions,
        dueDate:req.body.dueDate,
        trackingDate:req.body.trackingDate,
        acctionToBeTaken:req.body.acctionToBeTaken,
        complianceDate:req.body.complianceDate,
        remarks:req.body.remarks,
        dataStatus : req.body.dataStatus,
        createdBy :req.body.createdBy,

        createdOn:req.body.createdOn,
         modifiedBy: req.body.modifiedBy,
         modifiedOn : req.body.modifiedOn,
         deletedBy:req.body.deletedBy,
         deletedOn:req.body.deletedOn,

    });
    
    // Save CustomerDemographic in the database
    cpConditionMonitoring.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the CustomerDemographic." + err 
            
        });
    });
     //<-------------------------------------Audit Trail---------------------------------------------->\\
     req.body.dataStatus = "1";
     console.log(req.body);
    //  replicateData(req,res);
};

// Retrieve and return all CustomerDemographic from the database.
exports.findAll = (req, res) => {
    CpConditionMonitoring.find({dataStatus : 1})
    .then(cpConditionMonitoring => {
        res.send(cpConditionMonitoring);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving CustomerDemographic."
        });
    });
};

 // Find a single CustomerDemographic with a CustomerDemographicId
 exports.findOne = (req, res) => {
var id= req.params.primeNumber
    CpConditionMonitoring.find({primeNumber:id,dataStatus : 1})
    .then(cpConditionMonitoring => {
        if(!cpConditionMonitoring) {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.primeNumber
            });            
        }
        res.send(cpConditionMonitoring);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "cpConditionMonitoring not found with id " + req.params.customerDemographicId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving CustomerDemographic with id " + req.params.customerDemographicId
        });
    });
};

// Update a CustomerDemographic identified by the CustomerDemographicId in the request
 exports.update = (req, res) => {
    
    // Validate Request
    if(!req.body.primeNumber) {
        return res.status(400).send({
            message: "CustomerDemographic content can not be empty"
        });
    }

    console.log('Request Parameters in update CustomerDemographic request');
    // Find CustomerDemographic and update it with the request body
    CpConditionMonitoring.updateOne({ "primeNumber": req.body.primeNumber }, 
    { $set : req.body},)
    .then(cpConditionMonitoring => {
        if(!cpConditionMonitoring) {
            return res.status(404).send({
                message: "Customer Demographic not found with id " + req.params.cpConditionMonitoringId
            });
        }
        res.send(cpConditionMonitoring);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.cpConditionMonitoringId
            });                
        }
        return res.status(500).send({
            message: "Error updating CustomerDemographic with id " + req.params.cpConditionMonitoringId
        });
    });
    
//<----------------------------------------------------Audit Trail----------------------------------------->\\
console.log('Replicated Data');
    replicateData(req,res);

};

    // Delete a CustomerDemographic with the specified CustomerDemographicId in the request
    // exports.delete = (req, res) => {
    //     CustomerDemographic.findOneAndDelete(req.params.primeNumber)
    //     .then(customerDemographic => {
    //         if(!customerDemographic) {
    //             return res.status(404).send({
    //                 message: "CustomerDemographic not found with id " + req.params.primeNumber
    //             });
    //         }
    //         res.send({message: "CustomerDemographic deleted successfully!"});
    //     }).catch(err => {
    //         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
    //             return res.status(404).send({
    //                 message: "CustomerDemographic not found with id " + req.params.primeNumber
    //             });                
    //         }
    //         return res.status(500).send({
    //             message: "Could not delete CustomerDemographic with id " + req.params.primeNumber
    //         });
    //     });
    // };


//  exports.delete = (req, res) => {
//     console.log('Request Parameters in delete user request', req.params);
//     // Validate Request
//     if(!req.body.primeNumber) {
//         return res.status(400).send({
//             message: "prime Number can not be empty"
//         });
//     }
//     console.log('Request Parameters in update user request', req.params);
//     // Find note and update it with the request body
//     req.body.dataStatus ="0";
//     console.log("Deleted", req.body.dataStatus);
//     cpConditionMonitoringReplica.save()
//     .then(data => {
//         res.send(data);
//     }).catch(err => {
//         res.status(500).send({
//             message: err.message || "Some error occurred while creating the CustomerDemographic." + err 
            
//         });
//     }).catch((error) => {
//         assert.isNotOk(error,'Promise error');
//         done();
//       });
//       cpConditionMonitoring.updateOne(
//         { "primeNumber": req.body.primeNumber },
//         { $set : req.body }
//     )
//     .then(cpConditionMonitoring => {
//         console.log('primeNumber after delete ',cpConditionMonitoring);
//         if(!cpConditionMonitoring) {
         
//             return res.status(404).send({

//                 message: "User not found with id " + req.body.primeNumber
//             });
//         }
//         res.send({"message":"User Updated SuccesFully " + req.body.primeNumber});
//     }).catch(err => {
//         console.log(err);
//         if(err.kind === 'ObjectId') {
//             return res.status(404).send({
//                 message: "Note not found with id " + req.body.primeNumber
//             });                
//         }
//         return res.status(500).send({
//             message: "Error updating note with id " + req.body.primeNumber
//         });
//     });
// //<----------------------------------------------------Audit Trail----------------------------------------->\\
// req.body.dataStatus ="0";
// replicateDeleteData(req,res);
// };






exports.delete = (req, res) => {
    //<-------------------------------------Audit Trail---------------------------------------------->\\
    req.body.dataStatus = "0";
    console.log(req.body);
    // replicateData(req,res);
//<-------------------------------------Audit Trail---------------------------------------------->\\
    if (!req.body.primeNumber) {
        return res.status(400).send({
            message: "CustomerDemographic content can not be empty"
        });
    }

    console.log('before find one and delete query ',req.body.primeNumber);
    
     CpConditionMonitoring.findOneAndDelete({"primeNumber": req.body.primeNumber})
     .then(cpConditionMonitoring => {
         if(!cpConditionMonitoring) {
             return res.status(404).send({
                 message: "customer Demographic not found with id " + req.body.primeNumber
             });
         }
         res.send({message: "cpConditionMonitoring deleted successfully!"});
     }).catch(err => {
         if(err.kind === 'ObjectId' || err.name === 'NotFound') {
             return res.status(404).send({
                 message: "CPLogBook not found with id " + req.body.primeNumber
             });                
         }
         return res.status(500).send({
             message: "Could not delete CPLogBook with id " + req.body.primeNumber
         });
     });
 };
function replicateData(req,res)
{
    let cpConditionMonitoringReplica = new CpConditionMonitoringReplica({
        primeNumber:req.body.primeNumber, 
        businessSegment: req.body.businessSegment , 
        region: req.body.region , 
        branchCode: req.body.branchCode, 
        branchName: req.body.branchName , 
        nameOfBorrower:req.body.nameOfBorrower, 
        cpApprovalNo :req.body.cpApprovalNo, 
        cpApprovalDate:req.body.cpApprovalDate , 
        dateOfDisbursement:req.body.dateOfDisbursement, 
        typeOfFacility :req.body.typeOfFacility ,
        accountNo:req.body.accountNo , 
        conditions:req.body.conditions,
        dueDate:req.body.dueDate,
        trackingDate:req.body.trackingDate,
        acctionToBeTaken:req.body.acctionToBeTaken,
        complianceDate:req.body.complianceDate,
        dataStatus : req.body.dataStatus,
        createdBy : req.body.createdBy,
        modifiedBy :req.body.modifiedBy
    });

    console.log(cpConditionMonitoringReplica);
    console.log("Save CustomerDemographic in the database");
    // Save CustomerDemographic in the database
    cpConditionMonitoringReplica.save()
    .then(data => {
    }).catch(err => {        
    });
};