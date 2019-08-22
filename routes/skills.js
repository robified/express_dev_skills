var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');


router.get('/', skillsCtrl.index);
router.get('/skills/new', skillsCtrl.new);
router.get('/skills/:id', skillsCtrl.show);

router.post('/', skillsCtrl.create);
router.delete('/skills/:id', skillsCtrl.delete);

module.exports = router;