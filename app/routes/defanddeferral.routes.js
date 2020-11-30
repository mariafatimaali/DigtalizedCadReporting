module.exports = (app) => {

    const defanddeferral = require('../controllers/defanddeferral.controller.js');



    // Create a new defanddeferral

    app.post('/defanddeferral', defanddeferral.create);



    // Retrieve all defanddeferral

    app.get('/defanddeferral', defanddeferral.findAll);



    // Retrieve a single Note with defanddeferral

    app.get('/defanddeferral/:primenumber', defanddeferral.findOne);



    // Update a Note with defanddeferral

    app.put('/defanddeferral/:primeNumber', defanddeferral.update);



    // Delete a Note with defanddeferral

    app.delete('/defanddeferral/:primeNumber', defanddeferral.delete);

}
