module.exports = (app) => {

    const legalReviewTickler = require('../controllers/legalReviewTickler.controller.js');



    // Create a new Customer

    app.post('/legalReviewTickler', legalReviewTickler.create);

    // Retrieve all Notes

    app.get('/legalReviewTickler', legalReviewTickler.findAll);

    // Retrieve a single Note with noteId

    app.post('/legalReviewTicklerabc/', legalReviewTickler.findOne);

    // Update a Note with noteId

    app.put('/legalReviewTickler/:primeNumber', legalReviewTickler.update);

    // Delete a Note with noteId

    app.put('/legalReviewTickler', legalReviewTickler.delete);



}