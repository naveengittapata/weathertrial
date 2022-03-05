var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let weather = {
    temp : '90.5',
    unit : 'fahrenheit',
    cloudy:' false',
    precipitationChances: '0',

    
  }

  res.send(weather);
});

module.exports = router;