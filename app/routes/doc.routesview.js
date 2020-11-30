module.exports = (app) => {
    const doc = require('../controllers/doc.controllerview');
    app.post('/viewdocs', doc.doc);

}