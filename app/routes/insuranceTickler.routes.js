module.exports = (app) => {

    const insuranceTickler = require('../controllers/insuranceTickler.controller.js');




    // Create a new Customer

    app.post('/insuranceTickler', insuranceTickler.create);




    // Retrieve all Notes

    app.get('/insuranceTickler', insuranceTickler.findAll);




    // Retrieve a single Note with noteId

    app.get('/insuranceTickler/:primeNumber', insuranceTickler.findOne);




    // Update a Note with noteId

    app.put('/insuranceTickler/:primeNumber', insuranceTickler.update);




    // Delete a Note with noteId

    app.put('/insuranceTickler', insuranceTickler.delete);

    //Delette function




    //app.delete('/insuranceTickler/delete', insuranceTickler.delete);




}