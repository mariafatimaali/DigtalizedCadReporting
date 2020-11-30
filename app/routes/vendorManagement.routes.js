module.exports = (app) => {

    const vendorManagment = require('../controllers/vendorManagment.controller.js');



    // Create a new LimitFeedingPending

    app.post('/vendorManagment', vendorManagment.create);

    // Retrieve all LimitFeedingPendings

    app.get('/vendorManagment', vendorManagment.findAll);

    // Retrieve a single LimitFeedingPending with noteId

    app.get('/vendorManagment/:vendorCategory', vendorManagment.findOne);

    // Update a LimitFeedingPending with noteId

    app.put('/vendorManagment/:vendorCategory', vendorManagment.update);

    // Delete a LimitFeedingPending with noteId

    app.put('/vendorManagment', vendorManagment.delete);



}