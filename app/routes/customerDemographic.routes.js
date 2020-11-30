module.exports = (app) => {
    const customerDemographic = require('../controllers/customerDemographic.controller');

    // Create a new Customer
    app.post('/customerDemographic', customerDemographic.create);

    // Retrieve all Notes
  app.get('/customerDemographic/', customerDemographic.findAll);

    // Retrieve a single Note with noteId
    app.post('/customerDemographicabc', customerDemographic.findOne);
   // app.get('/customerDemographic/:primeNumber', customerDemographic.findOne);

    // Update a Note with noteId
    app.put('/customerDemographic/:primeNumber', customerDemographic.update);

    // Delete a Note with noteId
    app.put('/customerDemographic/', customerDemographic.delete);
}