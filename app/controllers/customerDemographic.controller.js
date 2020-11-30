const CustomerDemographic = require('../models/customerDemographic.model.js');

// Create and Save a new CustomerDemographic
exports.create = (req, res) => {
    // Validate request
    if(!req.body.primeNumber) {
        return res.status(400).send({
            message: "Customer Demographic content can not be empty"
        });
    }

    // Create a CustomerDemographic
    const customerDemographic = new CustomerDemographic({
       
        primeNumber:req.body.primeNumber, 
        businessSegment: req.body.businessSegment , 
        region: req.body.region , 
        branchCode: req.body.branchCode, 
        branchName: req.body.branchName , 
        nameOfBorrower:req.body.nameOfBorrower, 
        groupCode:req.body.groupCode, 
        nameOfGroup:req.body.nameOfGroup , 
        customerStatus:req.body.customerStatus, 
        cnic:req.body.cnic , 
        sbpCode:req.body.sbpCode , 
        customerType:req.body.customerType,
        createdBy :req.body.createdBy,

   createdOn:req.body.createdOn,
    modifiedBy: req.body.modifiedBy,
    modifiedOn : req.body.modifiedOn,
    deletedBy:req.body.deletedBy,
    deletedOn:req.body.deletedOn,

    });

    // Save CustomerDemographic in the database
    customerDemographic.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the CustomerDemographic." + err 
            
        });
    });
};


// Retrieve and return all CustomerDemographic from the database.
exports.findAll = (req, res) => {
    CustomerDemographic.find()
    .then(customerDemographic => {
        res.send(customerDemographic);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving CustomerDemographic."
        });
    });
};

// Find a single CustomerDemographic with a CustomerDemographicId
exports.findOne = (req, res) => {
var id= req.body.primeNumber
console.log(id);
    CustomerDemographic.find({primeNumber: req.body.primeNumber})
    .then(customerDemographic => {
        if(!customerDemographic) {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.primeNumber
            });            
        }
        res.send(customerDemographic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.customerDemographicId
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
    console.log('Request Parameters in update CustomerDemographic request', req);
    // Find CustomerDemographic and update it with the request body
    CustomerDemographic.updateOne({ "primeNumber": req.body.primeNumber }, 
    { $set : req.body},)
    .then(customerDemographic => {
        if(!customerDemographic) {
            return res.status(404).send({
                message: "Customer Demographic not found with id " + req.params.customerDemographicId
            });
        }
        res.send(customerDemographic);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.customerDemographicId
            });                
        }
        return res.status(500).send({
            message: "Error updating CustomerDemographic with id " + req.params.customerDemographicId
        });
    });
};

// Delete a CustomerDemographic with the specified CustomerDemographicId in the request
exports.delete = (req, res) => {
    CustomerDemographic.findOneAndDelete(req.params.primeNumber)
    .then(customerDemographic => {
        if(!customerDemographic) {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.primeNumber
            });
        }
        res.send({message: "CustomerDemographic deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.primeNumber
            });                
        }
        return res.status(500).send({
            message: "Could not delete CustomerDemographic with id " + req.params.primeNumber
        });
    });
};