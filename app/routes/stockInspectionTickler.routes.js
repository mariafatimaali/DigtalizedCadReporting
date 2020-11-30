module.exports = (app) => {

    const stockInspectionTickler = require('../controllers/stockInspectionTickler.controller.js');



    // Create a new Customer

    app.post('/stockInspectionTickler', stockInspectionTickler.create);



    // Retrieve all Notes

    app.get('/stockInspectionTickler', stockInspectionTickler.findAll);



    // Retrieve a single Note with noteId

   // app.get('/stockInspectionTickler/:primeNumber', stockInspectionTickler.findOne);
    app.post('/stockInspectionTicklerabc', stockInspectionTickler.findOne);



    // Update a Note with noteId

    app.put('/stockInspectionTickler/:primeNumber', stockInspectionTickler.update);



    // Delete a Note with noteId

    app.put('/stockInspectionTickler', stockInspectionTickler.delete);

    //Delette function



    //app.delete('/stockInspectionTickler/delete', stockInspectionTickler.delete);



}