module.exports = (app) => {

 

    const cplogbookdraft = require('../controllers/cplogbookDraft.controller.js');

 




    // Create a new Customer

 

     app.post('/cplogbookdraft', cplogbookdraft.create);

 




    // Retrieve all Notes

 

    app.get('/cplogbookdraft', cplogbookdraft.findAll);

 




    // Retrieve a single Note with noteId

 

    app.get('/cplogbookdraft/:primeNumber', cplogbookdraft.findOne);

 




    // Update a Note with noteId

 

    app.put('/cplogbookdraft/:primeNumber', cplogbookdraft.update);

 




    // Delete a Note with noteId

 

    app.delete('/cplogbookdraft/:primeNumber', cplogbookdraft.delete);

 

}