module.exports = (app) => {

    const cpConditionMonitoring = require('../controllers/cpConditionMonitoring.controller');




    // Create a new Customer

    app.post('/cpConditionMonitoring', cpConditionMonitoring.create);

    // Retrieve all Notes

    app.get('/cpConditionMonitoring', cpConditionMonitoring.findAll);

    // Retrieve a single Note with noteId

    app.get('/cpConditionMonitoring/:primeNumber', cpConditionMonitoring.findOne);

    // Update a Note with noteId

    app.put('/cpConditionMonitoring/:primeNumber', cpConditionMonitoring.update);

    // Delete a Note with noteId

    app.put('/cpConditionMonitoring', cpConditionMonitoring.delete);




} 