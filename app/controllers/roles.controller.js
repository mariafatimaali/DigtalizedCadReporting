const roles = require('../models/roles.model.js');

exports.create = (req, res) => {
    console.log("here");
    // Validate request
    if(!req.body.userid) {
        return res.status(400).send({
            message: "UserId can not be empty"
        }); 
        
    }
  
    const Roles = new roles({
        userid:req.body.userid, 
        view: req.body.view , 
        edit: req.body.edit , 
        delete: req.body.delete, 
        role: req.body.role,
        region:req.body.region,
        creationBy:req.body.creationBy,
        creationDate:req.body.creationDate,
      //  active : "1"
    });

    Roles.save(Roles)
        .then(data => {
            console.log('inside Data');
            res.send(data);
        })
        .catch(err => {
            console.log('inside Catch');
            res.status(500).json({
                responsecode: "500",
                responsemessage: "User Already Exist"
        });
    });
};





exports.findAll = (req, res) => {
   // roles.find({active  : 1 })
    roles.find()
    .then(roles => {
        res.send(roles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.update = (req, res) => {
    // Validate Request
    
    if(!req.body.userid) {
        return res.status(400).send({
            message: "User ID can not be empty"
        });
    }
    console.log('Request Parameters in update user request', req.params);
    // Find note and update it with the request body
    req.body.active = "1";
    roles.updateOne({ "userid": req.body.userid },
    { $set : req.body }
    )
    .then(roles => {
        console.log(this.roles);
        if(!roles) {
         
            return res.status(404).send({

                message: "User not found with id " + req.body.userid
            });
        }
        res.send("User Updated SuccesFully " + req.body.userid);
    }).catch(err => {
        console.log(err);
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.body.userid
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.body.userid
        });
    });
};


exports.delete = (req, res) => {
    console.log("hiiiiiiiiiiiiii")
    console.log('Request Parameters in delete user request', req.params);
    // Validate Request
    if(!req.body.userid) {
        return res.status(400).send({
            message: "User ID can not be empty"
        });
    }
    console.log('Request Parameters in update user request', req.params);
    // Find note and update it with the request body
    req.body.active = "0";
    roles.updateOne(
        { "userid": req.body.userid },
        { $set : req.body }
    )
    .then(roles => {
        console.log('roles after delete ',roles);
        if(!roles) {
         
            return res.status(404).send({

                message: "User not found with id " + req.body.userid
            });
        }
        res.send({"message":"User Updated SuccesFully " + req.body.userid});
    }).catch(err => {
        console.log(err);
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.body.userid
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.body.userid
        });
    });
};




exports.deleterole = (req, res) => {
    console.log("hereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
    roles.findOneAndDelete(req.params.userid)
    .then(roles => {
        if(!roles) {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.userid
            });
        }
        res.send({message: "CustomerDemographic deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "CustomerDemographic not found with id " + req.params.userid
            });                
        }
        return res.status(500).send({
            message: "Could not delete CustomerDemographic with id " + req.params.userid
        });
    });
};