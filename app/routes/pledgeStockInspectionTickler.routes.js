module.exports = (app) => {

    const pledgestockInspectionTickler = require('../controllers/pledgeStockInspectionTickler.controller.js');



    // Create a new Customer

    app.post('/pledgestockInspectionTickler', pledgestockInspectionTickler.create);



    // Retrieve all Notes

    app.get('/pledgestockInspectionTickler', pledgestockInspectionTickler.findAll);



    // Retrieve a single Note with noteId

    app.get('/pledgestockInspectionTickler/:primeNumber', pledgestockInspectionTickler.findOne);



    // Update a Note with noteId

    app.put('/pledgestockInspectionTickler/:primeNumber', pledgestockInspectionTickler.update);



    // Delete a Note with noteId

    app.put('/pledgestockInspectionTickler', pledgestockInspectionTickler.delete);

    //Delette function



    //app.delete('/pledgestockInspectionTickler/delete', pledgestockInspectionTickler.delete);



}