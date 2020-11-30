module.exports = (app) => {

    const pledgejointstockInspectionTickler = require('../controllers/pledgejointstockInspectionTickler.controller.js');



    // Create a new Customer

    app.post('/pledgejointstockInspectionTickler', pledgejointstockInspectionTickler.create);



    // Retrieve all Notes

    app.get('/pledgejointstockInspectionTickler', pledgejointstockInspectionTickler.findAll);



    // Retrieve a single Note with noteId

    app.get('/pledgejointstockInspectionTickler/:primeNumber', pledgejointstockInspectionTickler.findOne);



    // Update a Note with noteId

    app.put('/pledgejointstockInspectionTickler/:primeNumber', pledgejointstockInspectionTickler.update);



    // Delete a Note with noteId

    app.put('/pledgejointstockInspectionTickler', pledgejointstockInspectionTickler.delete);

    //Delette function



    //app.delete('/pledgejointstockInspectionTickler/delete', pledgejointstockInspectionTickler.delete);



}  