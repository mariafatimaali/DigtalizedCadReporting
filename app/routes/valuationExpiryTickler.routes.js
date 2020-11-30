module.exports = (app) => {

    const valuationExpiryTickler = require('../controllers/valuationExpiryTickler.controller.js');



    // Create a new Customer

    app.post('/valuationExpiryTickler', valuationExpiryTickler.create);

    // Retrieve all Notes

    app.get('/valuationExpiryTickler', valuationExpiryTickler.findAll);

    // Retrieve a single Note with noteId

    app.get('/valuationExpiryTickler/:primeNumber', valuationExpiryTickler.findOne);

    // Update a Note with noteId

    app.put('/valuationExpiryTickler/:primeNumber', valuationExpiryTickler.update);

    // Delete a Note with noteId

    app.put('/valuationExpiryTickler', valuationExpiryTickler.delete);



}


