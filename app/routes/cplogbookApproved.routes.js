
module.exports = (app) => {

    const cplogbook = require('../controllers/cplogbookApproved.js');



    // Create a new Customer

    app.post('/cplogbook', cplogbook.create);



    // Retrieve all Notes

    app.get('/cplogbook', cplogbook.findAll);



    // Retrieve a single Note with noteId

   // app.get('/cplogbook/:primeNumber', cplogbook.findOne);


    app.post('/cplogbookabc', cplogbook.findOne);
    // Update a Note with noteId

    app.put('/cplogbook/:primeNumber', cplogbook.update);



    // Delete a Note with noteId

    app.delete('/cplogbook/:primeNumber', cplogbook.delete);

}