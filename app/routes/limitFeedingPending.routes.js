module.exports = (app) => {

    const limitFeedingPending = require('../controllers/limitFeedingPending.controller.js');



    // Create a new LimitFeedingPending

    app.post('/limitFeedingPending', limitFeedingPending.create);

    // Retrieve all LimitFeedingPendings

    app.get('/limitFeedingPending', limitFeedingPending.findAll);

    // Retrieve a single LimitFeedingPending with noteId

   // app.get('/limitFeedingPending/:primeNumber', limitFeedingPending.findOne);

    app.post('/limitFeedingPendingabc', limitFeedingPending.findOne);
    // Update a LimitFeedingPending with noteId

    app.put('/limitFeedingPending/:primeNumber', limitFeedingPending.update);

    // Delete a LimitFeedingPending with noteId

    app.put('/limitFeedingPending', limitFeedingPending.delete);



}