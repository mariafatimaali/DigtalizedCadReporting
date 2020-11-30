const Branches = require('../models/branches.model');

// Create and Save a new CustomerDemographic
exports.create = (req, res) => {
    // Validate request
    if(!req.body.BranchCode) {
        return res.status(400).send({
            message: "Customer Demographic content can not be empty"
        });
    }

    // Create a CustomerDemographic
    const branch = new Branches({
       
        BranchName:req.body.BranchName, 
        BranchCode: req.body.BranchCode 
       
    });

    // Save CustomerDemographic in the database
    branch.save()
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
    Branches.find()
    .then(branch => {
        res.send(branch);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving CustomerDemographic."
        });
    });
};

// Find a single CustomerDemographic with a CustomerDemographicId
exports.findOne = (req, res) => {
var id= req.params.branch
Branches.find({branch:id})
    .then(branch => {
        if(!branch) {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.branchId
            });            
        }
        res.send(branch);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.branchId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving CustomerDemographic with id " + req.params.branchId
        });
    });
};

// Update a CustomerDemographic identified by the CustomerDemographicId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.branch) {
        return res.status(400).send({
            message: "CustomerDemographic content can not be empty"
        });
    }
    console.log('Request Parameters in update CustomerDemographic request', req);
    // Find CustomerDemographic and update it with the request body
    Branches.updateOne({ "branch": req.body.branch }, 
    { $set : req.body},)
    .then(branch => {
        if(!branch) {
            return res.status(404).send({
                message: "Customer Demographic not found with id " + req.params.branchId
            });
        }
        res.send(branch);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.branchId
            });                
        }
        return res.status(500).send({
            message: "Error updating CustomerDemographic with id " + req.params.branchId
        });
    });
};

// Delete a CustomerDemographic with the specified CustomerDemographicId in the request
exports.delete = (req, res) => {
    Branches.findOneAndDelete(req.params.branch)
    .then(branch => {
        if(!branch) {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.branchId
            });
        }
        res.send({message: "CustomerDemographic deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.branchId
            });                
        }
        return res.status(500).send({
            message: "Could not delete CustomerDemographic with id " + req.params.branchId
        });
    });
};