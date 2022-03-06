var express = require('express');
var router = express.Router();
const usersController=require('../controllers/userscontroller');
/* GET users listing. */
router.get('/', usersController.get_weathers);

module.exports = router;