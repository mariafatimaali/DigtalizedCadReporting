var express = require('express'),
    router = express.Router();


router.use('/', require('../User/encryptQuery'));

module.exports = router;