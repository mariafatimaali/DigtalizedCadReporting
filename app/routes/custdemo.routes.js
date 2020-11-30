
module.exports = (app) => {

    const branch = require('../controllers/custdemo.controller.js');



    // Create a new Customer

    app.post('/custdemo', branch.custdemo);
    // Retrieve all Notes
    // app.get('/branch', branch.findAll);
    // // Retrieve a single Note with noteId
    // app.get('/branch/:BranchCode', branch.findOne);
    // // Update a Note with noteId
    // app.put('/branch/:BranchCode', branch.update);
    // // Delete a Note with noteId
    // app.delete('/branch/:BranchCode', branch.delete);

}