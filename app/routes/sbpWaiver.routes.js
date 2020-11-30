
module.exports = (app) => {

    const sbpWaiver = require('../controllers/sbpWaiver.controller.js');




    // Create a new Customer

    app.post('/sbpWaiver', sbpWaiver.create);




    // Retrieve all Notes

    app.get('/sbpWaiver', sbpWaiver.findAll);




    // Retrieve a single Note with noteId

    app.get('/sbpWaiver/:primeNumber', sbpWaiver.findOne);




    // Update a Note with noteId

    app.put('/sbpWaiver/:primeNumber', sbpWaiver.update);




    // Delete a Note with noteId

    app.put('/sbpWaiver', sbpWaiver.delete);

    //Delette function




    //app.delete('/sbpWaiver/delete', sbpWaiver.delete);




}
