const Users = require('../models/users.model.js');

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/++[++^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}

// Create and Save a new Note
exports.create = (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    const users = new Users({
        id : req.body.id,
        title: req.body.title || "Untitled Note", 
        content: req.body.content,
        formtype : "CAD"
    
    });

    // Save Note in the database
    users.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
};


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    Users.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    console.log('Request Parameters in findAll user request', req.params);
    Users.findById(req.params.usersId)
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: "User not found with id " + req.params.usersId
            });            
        }
        res.send(users);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.usersId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.usersId
        });
    });
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    console.log('Request Parameters in update user request', req.params);
    // Find note and update it with the request body
    Users.findByIdAndUpdate(req.body.userId, {
        title: req.body.title || "Untitled User",
        content: req.body.content,
        id : req.body.id,
        formtype : req.body.formtype
    }, {new: true}
    )
    .then(users => {
        if(!users) {
         
            return res.status(404).send({

                message: "User not found with id " + req.body.usersId
            });
        }
        res.send("User Updated SuccesFully" + req.usersId);
    }).catch(err => {
        console.log(err);
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.body.usersId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.body.usersId
        });
    });
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    console.log('Request Parameters in delete user request', req.params);
    Users.findByIdAndRemove(req.body.userId)
    .then(users => {
        if(!users) {
            return res.status(404).send({
                message: "user not found with id " + req.body.userId
            });
        }
        res.send({message: " deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.body.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.body.userId
        });
    });
};