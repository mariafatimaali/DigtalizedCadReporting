module.exports = (app) => {

    const safeInOutRegister = require('../controllers/safeInOutRegister.controller.js');




    // Create a new Customer

    app.post('/safeInOutRegister', safeInOutRegister.create);




    // Retrieve all Notes

    app.get('/safeInOutRegister', safeInOutRegister.findAll);




    // Retrieve a single Note with noteId

    app.get('/safeInOutRegister/:primeNumber', safeInOutRegister.findOne);




    // Update a Note with noteId

    app.put('/safeInOutRegister/:primeNumber', safeInOutRegister.update);




    // Delete a Note with noteId

    app.put('/safeInOutRegister', safeInOutRegister.delete);

    //Delette function




    //app.delete('/customerDemographic/delete', customerDemographic.delete);




}