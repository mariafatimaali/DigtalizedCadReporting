module.exports = (app) => {
    const doc = require('../controllers/doc.controller.js');
    app.post('/v1/wsdl/encryptQuery/', doc.doc);

}