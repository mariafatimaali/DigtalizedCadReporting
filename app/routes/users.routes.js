module.exports = (app) => {
    const users = require('../controllers/users.controller.js');

    // Create a new Note
    app.post('/users', users.create);

    // Retrieve all Notes
    app.get('/users', users.findAll);

    // Retrieve a single Note with noteId
    app.get('/users/:usersId', users.findOne);

    // Update a Note with noteId
    app.put('/users', users.update);

    // Delete a Note with noteId
    app.delete('/users/:usersId', users.delete);

}