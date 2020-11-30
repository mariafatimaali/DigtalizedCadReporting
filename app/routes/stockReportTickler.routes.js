module.exports = (app) => {

    const stockReportTickler = require('../controllers/stockReportTickler.controller.js');



    // Create a new Customer

    app.post('/stockReportTickler', stockReportTickler.create);



    // Retrieve all Notes

    app.get('/stockReportTickler', stockReportTickler.findAll);



    // Retrieve a single Note with noteId

    app.get('/stockReportTickler/:primeNumber', stockReportTickler.findOne);


    app.post('/stockReportTicklerabc/', stockReportTickler.findOne);
    // Update a Note with noteId

    app.put('/stockReportTickler/:primeNumber', stockReportTickler.update);



    // Delete a Note with noteId

    app.put('/stockReportTickler', stockReportTickler.delete);

    //Delette function



    //app.delete('/stockReportTickler/delete', stockReportTickler.delete);



}
