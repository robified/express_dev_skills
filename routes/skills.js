var express = require('express');
var router = express.Router();
var skillkCtrl = require('../controllers/skills');


router.get('/', skillkCtrl.index);
router.get('/skills/:id', skillkCtrl.show);

module.exports = router;