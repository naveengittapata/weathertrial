var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let weathers = {
    temp : 90.5,
    unit : 'fahrenheit',
    cloudy:' false',
    precipitationChances: 0,

    
  }

  res.send(weathers);
});

module.exports = router;